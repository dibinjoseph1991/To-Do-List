
import { Component } from '@angular/core';
import { Task } from '../task';
import {TaskServiceService} from '../task-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

tasks:Task[];
task:Task

  textValue:string=""
  idValue:number=0;

  constructor(private taskServiceService:TaskServiceService ){

  }

    ngOnInit() {

      this.tasks=this.taskServiceService.getTask(); 
  }

 
addTask()
    {
      if(this.textValue)
      {


this.tasks=this.taskServiceService.getTask();


if(this.tasks.length<=0)
{
  this.tasks.push(new Task(1,this.textValue,"Created"));
}
else{
this.task=this.tasks[this.tasks.length-1];
this.tasks.push(new Task(this.task.id+1,this.textValue,"Created"));
}
this.textValue="";
    }

    }
  
}
