import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  baseUrl ="http://localhost:7000/"
  loginurl = "api/v1.0/flight/user/login"
  constructor(private http : HttpClient) { }
  Login(data:any) : Observable<any>{
    return this.http.post(this.baseUrl+this.loginurl,data)
  }
}
  
