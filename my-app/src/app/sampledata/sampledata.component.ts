import { Component, OnInit } from '@angular/core';
import { IPerson } from '../models/Person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-sampledata',
  templateUrl: './sampledata.component.html',
  styleUrls: ['./sampledata.component.scss']
})
export class SampledataComponent implements OnInit {
  personList: IPerson[];
  hasError: boolean;
  errorMessage: string;
  constructor(
    private readonly personService: PersonService
  ) { 
    this.personList = [];
    this.hasError = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.personService.getPersons()
    .subscribe({
      next: response => {
        console.log(response);
        this.personList = response.data;
     },
     error: err => {
       console.error(err);
       this.hasError = true;
       if (err.message) {
         this.errorMessage = err.message
       } else {
         this.errorMessage = 'Error occurred while retrieving the persons data.';
       }
     }
    });
  }

}
