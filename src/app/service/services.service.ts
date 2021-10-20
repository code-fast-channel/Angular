import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {
val:any;
edit=[];
public tasks=[];
id:any;

  constructor() { }

create(task){
this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task); 
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

     
}



getTasks() {
  if(localStorage.getItem('tasks') === null) {
    this.tasks = [];
  } else {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return this.tasks;
}



deleteTask(task) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (task == this.tasks[i]) {
      this.tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

}


EditTask(vals,Id){
  this.tasks = JSON.parse(localStorage.getItem('tasks'));
  this.id=Id.i;
  for(let i = 0; i<this.tasks.length; i++) {
    if(i==this.id) {
      this.tasks[i] = vals;
    }
 }
 localStorage.setItem('tasks', JSON.stringify(this.tasks));

 window.location.reload();

  }






}









