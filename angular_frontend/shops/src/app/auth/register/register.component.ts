import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AboutToken } from '../../store/about-token';
import { AuthCookiesService } from '../login/auth-cookies.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
messgaeError={email:[],name:[],password:[]};
messgeOfincorrect="";
  constructor(private authservice: AuthService,private authCookiesService:AuthCookiesService,
    private router:Router,private spinnerService: Ng4LoadingSpinnerService) { }
  
  ngOnInit() {
  }
  onSignup(form: NgForm) {
    this.spinnerService.show();
    this.messgaeError={email:[],name:[],password:[]};
    this.messgeOfincorrect="";
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
    this.authservice.signUpUser(username,email,password).subscribe(
      (data:AboutToken) => {
        this.spinnerService.hide();
  console.log("data",data)
  this.authCookiesService.setToken(data.access_token)
  this.authCookiesService.setRefrech(data.refresh_token)
  this.router.navigate(['/NearbyShops']);
      }
      ,error => {
        this.spinnerService.hide();
        console.log("error",error.error)
        this.messgaeError=error.error.errors;
        this.messgeOfincorrect=error.error.message
      }
    
    );
  }
}
