import { Injectable } from '@angular/core';
import { Observable,map, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../login/login.component.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject :BehaviorSubject<any>;
  public currentUser: Observable<any>;

  baseUrl ="http://localhost:7000/"
  loginurl = "api/v1.0/flight/user/login"
  constructor(private http : HttpClient) { 
    var userInfo = localStorage.getItem("UserInfo");
    if(userInfo){
      this.currentUserSubject = new BehaviorSubject<LoginModel>(JSON.parse(userInfo));
      this.currentUser = this.currentUserSubject.asObservable();
    }
    else{
      this.currentUserSubject = new BehaviorSubject<any>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }
  Login(data:any) : Observable<any>{
    return this.http.post(this.baseUrl+this.loginurl,data)
  }
  getCurrentUser():LoginModel {
    return this.currentUserSubject.value;
  }
  
  validateUser(params:any): Observable<any>
  {
    var endPoint = this.baseUrl + this.loginurl
    return this.http.post<any>(endPoint,params)
    .pipe(map(data => {
      if(data)
      {
        if(data.statusCode === environment.statusCode401)
        {
          alert(data.message);
          localStorage.removeItem("UserInfo");
          this.currentUserSubject.next(null);
          return;
        }
        localStorage.setItem("UserInfo",JSON.stringify(data));
        this.currentUserSubject.next(data);
      }
      return data;
    }));
  }
  


registerUser(userDetails : any) : Observable<any>
{
  var endPoint = this.baseUrl + environment.registerurl

  return this.http.post(endPoint,userDetails);
}

logout(){
  localStorage.removeItem("UserInfo");
  this.currentUserSubject.next(null);
}
}
