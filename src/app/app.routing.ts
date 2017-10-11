import { ModuleWithProviders}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home/home.component';
import { EditTaskComponent }   from './edit-task/edit-task.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'task',  component: HomeComponent },
  { path: 'task/:id', component: EditTaskComponent },


];

export const appRoutingProviders: any [] =[

];

export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);
