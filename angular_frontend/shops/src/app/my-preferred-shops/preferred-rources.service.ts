import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';

@Injectable()
export class PreferredRourcesService {

  token:string;
  constructor(private http:HttpClient,private authcookies:AuthCookiesService ) { }
 getPreferred(){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers.append('Authorization','Bearer '+this.token);
  return  this.http.get('http://localhost:8000/api/login', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
 setPreferred(){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers.append('Authorization','Bearer '+this.token);
  return  this.http.post('http://localhost:8000/api/login', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
 deletPreferred(){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers.append('Authorization','Bearer '+this.token);
  return  this.http.delete('http://localhost:8000/api/login', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
}
