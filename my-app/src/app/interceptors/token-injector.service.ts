import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class TokenInjectorService implements HttpInterceptor {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { 
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Intercepting token injector');
    if (!this.authenticationService.isLoggedIn()) {
      return next.handle(request);
    }

    let token = this.authenticationService.authenticationTicket;
    let requestWithAuthHeader = request.clone({
      headers: new HttpHeaders({
        'Authorization': `bearer ${token}`
      })
    });

    return next.handle(requestWithAuthHeader);
  }
}
