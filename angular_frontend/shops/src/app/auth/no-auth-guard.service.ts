import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NoAuthGuardService {

  constructor(private authservice: AuthService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean>|Promise<boolean>|boolean {
   if( !this.authservice.isAuthenticated())
   return !this.authservice.isAuthenticated();
   this.router.navigate(['/NearbyShops']);
   return true;
   
   ;
  }

}
