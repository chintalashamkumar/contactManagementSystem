import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private ngfb: FormBuilder, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.registerForm = this.ngfb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], // '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@inmar\.com$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  currentPassword() {
    const currentPassword = this.registerForm.controls['password'].value;
  }
  confirmPassword() {
    const confirmPassword = this.registerForm.controls['confirmPassword'].value;
  }
  onSubmit() {
    const details = { // grabbing the value from the input fields
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value + '@inmar.com',
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value
    };
    this.submitted = true;
    // console.log(details);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (details.password === details.confirmPassword) {
      localStorage.setItem('userDetails', JSON.stringify(details));

      this.sharedService.setAlert({ type: 'success', message: 'successfully updated' });
      setTimeout(() => {
        this.sharedService.setAlert({ type: '', message: '' });
        this.router.navigate(['login']);
      }, 3000);
    } else {
      setTimeout(() => {
        this.sharedService.setAlert({ type: '', message: '' });
      }, 3000);
      this.sharedService.setAlert({ type: 'error', message: 'Please enter valid details' });
    }
  }
}
