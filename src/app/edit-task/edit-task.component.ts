import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
 import  'rxjs/Rx';


import {TaskServiceService} from '../task-service.service'
import {Task} from '../task';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

id:number=0;
task:Task;
tasks:Task[];

  constructor(private taskServiceService:TaskServiceService, private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() {
     

       this.route.params.map(params=>params['id']).subscribe((id)=>{
      this.id=id;
  });

  this.task=this.taskServiceService.getTaskOnId(this.id);


  }

  goBack(): void {
  this.location.back();
}

changeStatus(task:Task)
{
  task.status="Pending";
  
  this.location.back();

}

remove(task)
  {
this.tasks=this.taskServiceService.getTask();
this.tasks.splice(this.tasks.indexOf(this.task),1);
  this.location.back();
  }


}
