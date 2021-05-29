import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  username = '';
  constructor(
    private readonly authenticationService: AuthenticationService
  ) { 

  }

  ngOnInit(): void {
    let username = localStorage.getItem(this.authenticationService.usernameKey);
    this.isLoggedIn = username != undefined;
    this.username = username || '';
  }

}
