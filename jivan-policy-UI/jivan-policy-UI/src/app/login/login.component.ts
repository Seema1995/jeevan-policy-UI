import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder: FormBuilder,private service: PolicyService, private _router:Router) { 

  }

  user = this._builder.group({
    firstName : [''],
    lastName : [''],
    dob : [''],
    address : [''],
    contactNo : [''],
    email : [''],
    password : [''],
    confirmPassword : ['']
  })

  ngOnInit(): void {
  }

  data = [
    { img: "assets/images/login1.jpg", title: "" },
    { img: "assets/images/login6.jpg", title: "" },
  ];

  requestBody : any
  response : any
  err : any
  register(){
    this.requestBody = {
      "firstName" : this.user.controls['firstName'].value,
      "lastName" : this.user.controls['lastName'].value,
      "dob" : this.user.controls['dob'].value,
      "address" : this.user.controls['address'].value,
      "contactNo" : this.user.controls['contactNo'].value,
      "email" : this.user.controls['email'].value,
      "password" : this.user.controls['password'].value,
      "confirmPassword" : this.user.controls['confirmPassword'].value
    }

    this.service.registerUser(this.requestBody).subscribe(response =>{
      this.response = response;
    },err => {
      this.err = err.error.message
    })

  }

}
