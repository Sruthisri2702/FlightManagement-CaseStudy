import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router, private loginService : LoginService) { }
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    const userInfo = this.loginService.getCurrentUser();

    if(userInfo)
    {
      return true;
    }

    this.router.navigate(["/userlogin"]);
    return false;
  }
}
