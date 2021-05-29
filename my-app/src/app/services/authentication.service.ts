import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../models/LoginInfo';
import { map } from 'rxjs/operators'
import jwt_decode from "jwt-decode"
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private readonly loginSubject = new BehaviorSubject(false);
  
  readonly loginObserver = this.loginSubject.asObservable();
  readonly usernameKey = 'username';
  readonly tokenKey = 'auth_ticket';

  constructor(
    private httpClient: HttpClient
  ) {
    this.loginSubject.next(this.isLoggedIn());
   }

  get authenticationTicket(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  login(loginInfo: LoginInfo) {
    console.log('authenticating with', loginInfo);
    let url = 'https://localhost:44356/api/main/validateuser';
    let transformedResult = this.httpClient.post<any>(url, loginInfo)
      .pipe(map(response => {
        if (response.success) {
          if (response.token?.length > 0) {
            let parsed = jwt_decode(response.token) as any;
            console.log('Parsed token');
            console.log(parsed);
            let name = parsed.name;
            localStorage.setItem(this.usernameKey, name);
            localStorage.setItem(this.tokenKey, response.token);
            this.loginSubject.next(true);
            return true;
          }
          else {
            console.error('Token not found');
            return false;
          }
        }
        else {
          console.error('Response does not indicate success');
          return false;
        }
      }));

      return transformedResult;
  }

  logout(): Observable<boolean> {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.usernameKey);
    this.loginSubject.next(false);
    return of(true);
  }

  isLoggedIn(): boolean {
    let tokenValue = localStorage.getItem(this.tokenKey);
    return tokenValue != undefined;
  }
}
