import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from '../models/IResponse';
import { IPerson } from '../models/Person';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PersonService {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly httpClient: HttpClient
  ) {
      // empty
   }

   getPersons(): Observable<IResponse<IPerson>> {
     let url = 'https://localhost:44356/api/main/getpersons';
     let getResponse = this.httpClient.get<IResponse<IPerson>>(url, {
       headers: new HttpHeaders ({
         'Authorization': `bearer ${localStorage.getItem(this.authenticationService.tokenKey) || ''}`
       })
     });

     return getResponse;
   }
}