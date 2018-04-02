import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';
import {GeoLocationService} from '../geolocation-service.service';
import { Position } from '../models/position';
import { Observable } from 'rxjs';
import { shop } from '../models/shop';
@Injectable()
export class NearRourcesService {
 token:string;
 position;
  constructor(private http:HttpClient,private authcookies:AuthCookiesService,private geolocationService:GeoLocationService) { }
 getShopsNear(){
  return this.geolocationService.getLocation().map((position:Position)=>{
   return position;
   }).switchMap((position)=>{
    this.position=position
    let headers = new HttpHeaders();
    let Params = new HttpParams();
    //console.log('postion',this.position.coords)
    // Begin assigning parameters
    Params = Params.append('latide',this.position.coords.Latide);
    Params = Params.append('longitude',this.position.coords.Longitude);
    this.token=this.authcookies.getToken();
    headers=headers.append('Authorization','Bearer '+this.token);
      return  this.http.get<shop[]>('http://localhost:8000/api/shops',{
        observe: 'body',
        responseType: 'json',
        headers:headers,
        params: Params
      })
   })
   
 }
 
}
