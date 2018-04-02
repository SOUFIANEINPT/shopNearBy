import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    // headers: req.headers.set('Accept', "application/json").append('Application','application/json') 
    const copiedReq = req.clone({
    params: req.params.set('Accept', "application/json").append('Application','application/json')
  });
    return next.handle(copiedReq);
  
  }
}
