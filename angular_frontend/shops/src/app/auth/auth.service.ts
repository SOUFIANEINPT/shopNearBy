import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { AuthCookiesService } from './login/auth-cookies.service';
;
@Injectable()
export class AuthService {
token;
  constructor(private router: Router,private http:HttpClient,private authCookiesService:AuthCookiesService) {}
  signInUser(username:string, password: string) {
    
  return  this.http.post('http://localhost:8000/api/login',{'username':username,'password':password}, {
      observe: 'body',
      responseType: 'json'
    })
  }
  signUpUser(name:string,email:string,password: string) {
   return this.http.post('http://localhost:8000/api/register',{'name':name,'email':email,'password':password}, {
      observe: 'body',
      responseType: 'json'
    })
  }

  isAuthenticated() {
    return this.authCookiesService.getToken()!=null
  }
  }
