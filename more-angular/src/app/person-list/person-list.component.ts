import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson } from '../models/IPerson';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  personList: IPerson[];
  redirectedFromMessage: string;
  constructor(
    private readonly dataService: DataProviderService,
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute
    ) { 
    this.personList = []
    this.redirectedFromMessage = '';
  }

  ngOnInit(): void {
    this.personList = this.dataService.getPersons();
    let optionalId = this.activateRoute.snapshot.paramMap.get('id');
    if (optionalId) {
      let parsedId = parseInt(optionalId);
      if (parsedId) {
        this.redirectedFromMessage = `You were redirected by ${this.dataService.getPerson(parsedId)?.name}`;
      }
    }
  }

  openPersonDetails(person: IPerson) {
    this.router.navigate([person.id], {relativeTo: this.activateRoute});
  }
}
