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
   messgaeError:string;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  onSignin(form:NgForm) {
    console.log("form",form)
    
    const email = form.value.email;
    const password = form.value.password;
  this.authservice.signupUser(email,password).subscribe(
    data => {
console.log("data",data)
    }
    ,error => {
   this.messgaeError=error;
   console.log("data",error)
    }
  );
  }
  
}