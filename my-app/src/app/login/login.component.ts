import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInfo } from '../models/LoginInfo';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginInfo: LoginInfo;
  loginError = false;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { 
    this.loginInfo = {
      password: '',
      login: ''
    }
  }

  authenticate() {
    this.authenticationService.login(this.loginInfo)
      .subscribe(result => {
        console.log('Auth result:', result);
        this.loginError = !result;
        if (result) {
          this.router.navigateByUrl('/home');
        }
      })
  }
}
