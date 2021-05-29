import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  message = '';
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly routerService: Router
  ) { 

  }

  ngOnInit(): void {
    this.authenticationService.logout().subscribe(result => {
      if (result) {
        this.message = 'You have been logged out. You will be redirected soon.';
        setTimeout(() => this.routerService.navigateByUrl('/login'), 3000);
      } else {
        this.message = 'You could not be logged out.';
      }
    })
  }

}
