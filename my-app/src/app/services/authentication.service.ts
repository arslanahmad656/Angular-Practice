import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../models/LoginInfo';
import { map } from 'rxjs/operators'
import jwt_decode from "jwt-decode"
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthenticationService {
  readonly usernameKey = 'username';
  readonly tokenKey = 'auth_ticket';
  constructor(
    private httpClient: HttpClient
  ) {
    // empty yet
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
    return of(true);
  }
}
