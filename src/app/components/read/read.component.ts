import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Services} from '../../service/services.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tasks=[];
 
  constructor(public service:Services,public router:Router) { }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
 
  }
  deleteTask(task){
      if(confirm('Are you sure you want to delete this task?')) {
        this.service.deleteTask(task);
      }
    }


    EditTask(Task,i){
   this.router.navigate(['/edit',i],{queryParams:Task,skipLocationChange:true});
  
   
  }

}