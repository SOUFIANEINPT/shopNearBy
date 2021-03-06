import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authservice: AuthService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean>|Promise<boolean>|boolean {
   if(this.authservice.isAuthenticated())
   return true;
   else
   {this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
   return false;
  }
   ;
  }
}

