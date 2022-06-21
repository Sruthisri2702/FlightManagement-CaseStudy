import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminLoginModel } from './adminlogin.component.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminloginModelObj : adminLoginModel = new adminLoginModel();
  
  constructor(private _loginservice : LoginService,
    private formbuilder : FormBuilder, 
    private router : Router) { }

    userCredentials : FormGroup = this.formbuilder.group({
      username : new FormControl('',[
        Validators.required
      ]),
      password : new FormControl('',[
        Validators.required
      ]),
      role: new FormControl('admin', [
        Validators.required
      ])
    })


  ngOnInit(): void {
  }
  ValidateUser(){
    console.log('>>>');
    console.log(this.userCredentials.value);
    if(this.userCredentials.invalid){
      alert("Enter your username and password");
      return;
    }
    this._loginservice.validateUser(this.userCredentials.value).subscribe((result) =>{
      console.log(result);
      if(result.token){
        this.router.navigate(["manageairline"]);
      }
      else{
        alert(result.response);
      }
    }),
     (error : any ) =>{
      console.error('>>>>>>>>',error);
      alert("Something went wrong!");
      //this.router.navigate(["register"]);
      //check this later
      
     }

  }
 

}
