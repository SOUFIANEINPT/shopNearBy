import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';

@Injectable()
export class NearRourcesService {
 token:string;
  constructor(private http:HttpClient,private authcookies:AuthCookiesService ) { }
 getShopsNear(){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers.append('Authorization','Bearer '+this.token);
  return  this.http.post('http://localhost:8000/api/login', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
 
}
