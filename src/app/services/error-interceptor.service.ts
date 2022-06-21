import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler , HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { catchError, Observable , throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private loginService : LoginService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    return next.handle(request).pipe(catchError(err =>{
      if(err.status === environment.statusCode401)
      {
        console.log("Error Interceptor");
        console.warn(err);
        this.loginService.logout();
      }
      const error = err.error?.message || err.statusText;
      return throwError(error);
    }));
  }
}
