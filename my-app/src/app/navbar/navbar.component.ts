import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  
  constructor(
    private readonly authenticationService: AuthenticationService
  ) { 
    // empty
  }

  ngOnInit(): void {
    this.authenticationService.loginObserver.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

}
