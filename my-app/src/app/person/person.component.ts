import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person;

  constructor() {
    this.person = new Person(0, 'raw');
  }

}