import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthCookiesService } from '../auth/login/auth-cookies.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
token:string
  constructor(private authservice:AuthService,private http:HttpClient,private authcookies:AuthCookiesService,
    private spinnerService: Ng4LoadingSpinnerService,private router:Router) { }

  ngOnInit() {
  }
logout()
{
  this.spinnerService.show();
  let headers = new HttpHeaders();
this.token=this.authcookies.getToken();
headers=headers.append('Authorization','Bearer '+this.token);
   this.http.get('http://localhost:8000/api/logout', {
    observe: 'body',
    responseType: 'json',
    headers:headers
  }).subscribe(data=>{
    this.spinnerService.hide();
    this.router.navigate(['/login']);
    this.authcookies.deleteToken();
    this.authcookies.deleteRefrech();
  },error=>{
    this.spinnerService.hide();
  })
}
}
