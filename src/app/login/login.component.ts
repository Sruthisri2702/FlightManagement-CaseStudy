import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginModelObj : LoginModel = new LoginModel();

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
      role: new FormControl('user', [
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
          this.router.navigate(["flightbooking"]);
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
    LogOut(){
      
    }
    
  }




