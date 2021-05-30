import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  readonly activeClass: string;
  readonly links: ILink[];
  
  constructor() {
    this.activeClass = 'link-active';
    this.links = [
      {title: 'Home', url: '/home'},
      {title: 'Persons', url: '/persons'}
    ]
  }

  ngOnInit(): void {
  }

}

interface ILink {
  url: string,
  title: string
}