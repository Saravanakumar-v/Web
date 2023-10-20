import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  isDisabled: boolean = false;
  errorMessage: string;
  error: boolean;

  verifyLogin() {
    let isLoginValid: boolean = false;


    for(let index=0;index< localStorage.length;index++){
      if(this.loginForm.value.username == localStorage.key(index)) {
        if(this.loginForm.value.password == localStorage.getItem(localStorage.key(index))) {
          isLoginValid = true;
        }
      }
    }

    // isLoginValid = true;

    if(isLoginValid) {
      this.route.navigateByUrl("mainPage")    
      console.log("user-login verified!")
    } else if(this.loginForm.invalid) {
      this.errorMessage = "Invalid Credentials";
    }
  }


}
