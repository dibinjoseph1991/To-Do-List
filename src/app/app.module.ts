import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {routing,appRoutingProviders} from './app.routing';
import { HomeComponent } from './home/home.component';
import {TaskServiceService} from './task-service.service'

@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     routing
  ],
  providers: [appRoutingProviders,TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
