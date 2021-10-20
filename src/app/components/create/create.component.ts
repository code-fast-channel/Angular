import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { Services } from 'src/app/service/services.service';
import{Services} from '../../service/services.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  submitted = false;
  registerForm:FormGroup;
  tasks:[];
  obj:any;
 Id:any;
 public vals:any;
 editId:any;
 check:boolean=false;
  constructor(private formBuilder: FormBuilder,private service:Services,private router:ActivatedRoute) {

    this.router.queryParams.subscribe(data=>{
      this.obj=data;    
      this.editform();
    })
this.router.params.subscribe(id=>
  {
    this.Id=id
  this.editId=id;
   this.vals=this.editId.i;
  }
  )




   }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
this.editform();




      // this.registerForm.controls['firstName'].setValue(this.obj.firstName);
      // this.registerForm.controls['lastName'].setValue(this.obj.lastName);
      // this.registerForm.controls['email'].setValue(this.obj.email);
      // this.registerForm.controls['password'].setValue(this.obj.password);
    


  }

editform(){
  if(this.vals){
    this.check=true;
    this.registerForm.controls['firstName'].setValue(this.obj.firstName);
    this.registerForm.controls['lastName'].setValue(this.obj.lastName);
    this.registerForm.controls['email'].setValue(this.obj.email);
    this.registerForm.controls['password'].setValue(this.obj.password);
  }
  else{
    this.check=false;
  }
}



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  create() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
     else{
           const val=this.registerForm.value;
       this.service.create(val);
       this.onReset();

     }
      
  }
update(Id){  
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
 else{
   const val=this.registerForm.value;
   this.service.EditTask(val,Id);  
   this.service.getTasks();
   this.onReset();
  
 }
  

 
}
onReset(){
  this.submitted = false;
  this.registerForm.reset();
}


}
