import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService} from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: any;
  isLogin: any = false;
  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.sharedService.login().subscribe(res => {
        console.log(res);
        this.loginData = res;
    });
  }
  loginUser() {
    const credentials = { // grabbing the value from the input fields
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };

    if ( this.loginData[0].email === credentials.email && this.loginData[0].password === credentials.password ) {
      //  alert("login successful");
      setTimeout(() => {
        this.sharedService.setAlert({ type: '', message: '' });
      }, 3000);
      this.sharedService.setAlert({ type: 'success', message: 'successfully updated' });
       this.isLogin = true;
       localStorage.setItem('isLogin', this.isLogin );
       this.sharedService.sendMessage(false);
       this.router.navigate(['/home']);
    } else {
      setTimeout(() => {
        this.sharedService.setAlert({ type: '', message: '' });
      }, 3000);
      this.sharedService.setAlert({ type: 'error', message: 'Please enter valid details' });
    }

  }
}
