import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';
import { shop } from '../models/shop';
import { shopref } from '../models/shoppref';

@Injectable()
export class PreferredRourcesService {

  token:string;
  constructor(private http:HttpClient,private authcookies:AuthCookiesService ) { }
 getPreferred(){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers=headers.append('Authorization','Bearer '+this.token);
  return  this.http.get<shopref[]>('http://localhost:8000/api/Preferreds', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
 setPreferred(Shop:shopref){
  let headers = new HttpHeaders();
  let Params = new HttpParams();
this.token=this.authcookies.getToken();
headers=headers.append('Authorization','Bearer '+this.token);
Params = Params.append('type',Shop.type.toString());
  return  this.http.post('http://localhost:8000/api/Preferreds',Shop.Shoppart,{
    observe: 'body',
    responseType: 'json',
    headers:headers,
    params:Params
  })
 }
 deletPreferred(id){
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers=headers.append('Authorization','Bearer '+this.token);
  return  this.http.delete('http://localhost:8000/api/Preferreds/'+id, {
    observe: 'body',
    responseType: 'json',
    headers:headers
  })
 }
}
