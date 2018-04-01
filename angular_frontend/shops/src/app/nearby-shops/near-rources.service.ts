import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';
import {GeoLocationService} from '../geolocation-service.service';
import { Position } from '../models/position';
import { Observable } from 'rxjs';
import { shop } from '../models/shop';
@Injectable()
export class NearRourcesService {
 token:string;
 position:Position;
  constructor(private http:HttpClient,private authcookies:AuthCookiesService,private geolocationService:GeoLocationService) { }
 getShopsNear(){
  return this.geolocationService.getLocation().map((position:Position)=>{
   return position;
   }).switchMap((position:Position)=>{
    this.position=position
    let headers = new HttpHeaders();
    this.token=this.authcookies.getToken();
    headers.append('Authorization','Bearer '+this.token);
      return  this.http.post<shop[]>('http://localhost:8000/api/shops',{'latide':position.Latide,'longitude':position.Longitude},{
        observe: 'body',
        responseType: 'json',
      headers:headers
      })
   })
   
 }
 
}
