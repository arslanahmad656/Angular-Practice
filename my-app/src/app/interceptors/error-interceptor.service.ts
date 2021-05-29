import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting from Error interceptor');
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authenticationService.logout();
          location.reload();
        }

        return throwError('Error occurred');
      })
    )
  }
}
