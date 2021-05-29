import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { }

  canActivate() : Observable<boolean> | boolean {
    return this.authenticationService.isLoggedIn();
  }
}
