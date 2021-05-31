import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IPerson } from '../models/IPerson';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: IPerson | undefined;
  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly dataService: DataProviderService,
    private readonly router: Router
  ) { 
    this.person = undefined;
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.person = this.dataService.getPerson(parseInt(paramMap.get('id') || ''))  
    });
  }

  navigateNext() {
    this.router.navigate(['persons', (this.person?.id || 0) + 1]);
  }

  navigatePrevious() {
    this.router.navigate(['persons', (this.person?.id || 0) - 1]);
  }

  goBack() {
    this.router.navigate(['../', {id: this.person?.id}], {relativeTo: this.activateRoute});
  }
}
