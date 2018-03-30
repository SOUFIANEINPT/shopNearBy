import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
;
@Injectable()
export class AuthService {

  constructor(private router: Router,private http:HttpClient) {}
  signupUser(email: string, password: string) {
    
  return  this.http.post('http://localhost:8000/api/login',{'email':email,'password':password}, {
      observe: 'body',
      responseType: 'json'
    })
  }
  signinUser(email: string, password: string) {
   return this.http.post('http://localhost:8000/api/register',{'username':email,'password':password}, {
      observe: 'body',
      responseType: 'json'
    })
  }

  logout() {
    
  }

  getToken() {
    
  }

  isAuthenticated() {
   
  }
  }
