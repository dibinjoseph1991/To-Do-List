import { Injectable } from '@angular/core';
import { Task } from './task';



@Injectable()
export class TaskServiceService {

  constructor() { }

   tasks:Task[]=[
  new Task(1,"Call Ben to discuss on the bug fixes","Pending"),
  new Task(2,"Follow up on two threads","Created"),
    new Task(3,"Lunch with Jake","Pending"),
      new Task(4,"Leave early today","Pending"),
        new Task(5,"Pay 200 buck back to bucky","Created"),

];

taskText="";
modifiedText="";


getTask():Task[]{
  return this.tasks;
}








getTaskOnId(id:number):Task{
  //  return this.getheroes().then(HEROES=>HEROES.find(hero=>hero.id==id));
    return this.tasks.find(task=>task.id==id);
}


}