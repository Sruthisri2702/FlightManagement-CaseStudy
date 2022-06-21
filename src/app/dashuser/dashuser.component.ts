import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashuser',
  templateUrl: './dashuser.component.html',
  styleUrls: ['./dashuser.component.css']
})
export class DashuserComponent implements OnInit {
  

  constructor(private _loginservice : LoginService, private router : Router)
    
 { }



  ngOnInit(): void {

  }
  Logout(){
    this._loginservice.logout();
    this.router.navigate(["userlogin"]);
    
  }
 
}

