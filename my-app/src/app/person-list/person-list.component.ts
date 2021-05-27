import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  @Input() public personList: Person[];
  @Output() onPersonAdded = new EventEmitter<Person>();

  constructor() { 
    this.personList = []
  }

  addNewPerson(name: string) {
    let person = new Person (100, name);
    this.personList.push(person);
    this.onPersonAdded.emit(person);
  }

}
