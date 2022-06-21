import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashadmin',
  templateUrl: './dashadmin.component.html',
  styleUrls: ['./dashadmin.component.css']
})
export class DashadminComponent implements OnInit {

  constructor(private _loginservice : LoginService, private router : Router) { }

  ngOnInit(): void {
  }
  
  Logout(){
    this._loginservice.logout();
    this.router.navigate(["adminlogin"]);
    
  }
}
