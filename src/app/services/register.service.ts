import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl ="http://localhost:7000/"
  loginurl = "api/v1.0/flight/login/register"
  constructor(private http : HttpClient) { }
  registerUser(data:any) : Observable<any>{
    return this.http.post(this.baseUrl+this.loginurl,data)
  }
}
