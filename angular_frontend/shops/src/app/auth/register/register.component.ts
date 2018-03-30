import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
messgaeError={email:[],name:[],password:[]};
messgeOfincorrect="";
  constructor(private authservice: AuthService) { }
  
  ngOnInit() {
  }
  onSignup(form: NgForm) {
    this.messgaeError={email:[],name:[],password:[]};
    this.messgeOfincorrect="";
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
    this.authservice.signUpUser(username,email,password).subscribe(
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
