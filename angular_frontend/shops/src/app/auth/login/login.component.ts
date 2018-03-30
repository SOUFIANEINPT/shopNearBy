import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   messgaeError={username:[],password:[]};
   messgeOfincorrect=""
   constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  onSignin(form:NgForm) {
    this.messgeOfincorrect="";
    this.messgaeError={username:[],password:[]};
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
  this.authservice.signInUser(email,password).subscribe(
    data => {
console.log("data",data)
    }
    ,error => {
      console.log("error",error.error)
      this.messgaeError=error.error.errors;
      this.messgeOfincorrect=error.error.message
 
    }
  );
  }
  
}