import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import 'rxjs/Rx';
import { AboutToken } from '../../store/about-token';
import { AuthCookiesService } from './auth-cookies.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   messgaeError={username:[],password:[]};
   messgeOfincorrect=""
   constructor(private authservice:AuthService,private authCookiesService:AuthCookiesService,
    private router:Router,private activeroute: ActivatedRoute) { }

  ngOnInit() {
  }
  onSignin(form:NgForm) {
    this.messgeOfincorrect="";
    this.messgaeError={username:[],password:[]};
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
  this.authservice.signInUser(email,password).subscribe(
    (data:AboutToken) => {
     let RedirectUrl =this.activeroute.snapshot.queryParamMap.get('returnUrl')||'/NearbyShop'
     this.authCookiesService.setToken(data.access_token)
     this.authCookiesService.setRefrech(data.refresh_token)
     this.router.navigateByUrl(RedirectUrl);
    }
    ,error => {
      console.log("error",error.error)
      this.messgaeError=error.error.errors;
      this.messgeOfincorrect=error.error.message
 
    }
  );
  }
  
}