import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class AuthService {

  constructor(private router: Router,private http:HttpClient) {}
  signupUser(email: string, password: string) {
    
    this.http.post('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',{'email':email,'password':password}, {
      observe: 'body',
      responseType: 'json'
    }).subscribe(result=>{
      console.log('result',result);
    })
  }

  signinUser(email: string, password: string) {
    this.http.post('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',{'email':email,'password':password}, {
      observe: 'body',
      responseType: 'json'
    }).subscribe(result=>{
      console.log('result',result);
    });
  }

  logout() {
    
  }

  getToken() {
    
  }

  isAuthenticated() {
   
  }
  }
