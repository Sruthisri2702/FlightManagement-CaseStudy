import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from './register.component.model';
import { RegisterService } from '../services/register.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDetails !: any;
  registerModelObj : RegisterModel = new RegisterModel();
  constructor(private formBuilder: FormBuilder, private _registerData: RegisterService, private router : Router) 
  { 
     
  }
    formValue:FormGroup = this.formBuilder.group(
    {
      name : new FormControl('',[
        Validators.required
      ]),
      username : new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  

  ngOnInit(): void {
    
  }

  RegisterUser(){

    console.log(this.formValue.value);
      if(this.formValue.invalid){
        alert("Enter all details");
        return;
      }
    this.registerModelObj.Name= this.formValue.value.name;
    this.registerModelObj.Username= this.formValue.value.username;
    this.registerModelObj.Password= this.formValue.value.password;
    this.registerModelObj.Role = 'user';
    this._registerData.registerUser(this.registerModelObj).subscribe
    ((result) => {console.log(result)});
      alert("Registration completed successfully!");
     this.formValue.reset();
  }
  
}
