import { Component } from '@angular/core';
import { Person } from './person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personList: Person[] = [
    new Person(1, 'Arslan'),
    new Person(2, 'Asim')
  ]

  onPersonAdded(person: Person) {
    alert(`${person} has been added to the list.`);
  }
}
