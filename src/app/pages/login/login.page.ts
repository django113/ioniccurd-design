import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: any;

  constructor(private formBuilder: FormBuilder,
              ) {

    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }
  onSignIn() {
    console.log('login');
  }
  onForgotPassword() {
    console.log('forget password');
  }

}
