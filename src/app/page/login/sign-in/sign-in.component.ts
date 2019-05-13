import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ngOnInit() {
    this.authService.authServiceErrorMsg.subscribe(errorMsg => this.errorMsg = errorMsg)
  }

  onlogin() {
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .subscribe(
        (user: User) => {
          if (user) {
            this.authService.changeAuthServiceMsgError('');
            this.router.navigate(['list-user']);
          } else {
            this.authService.changeAuthServiceMsgError('Username and/or password do not match!');
            this.router.navigate(['sign-in']);
          }
        }
      );
  }

}
