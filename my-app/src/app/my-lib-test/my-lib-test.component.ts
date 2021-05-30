import { Component, OnInit } from '@angular/core';
import { DataProviderService, ISchool } from 'lib-provider';

@Component({
  selector: 'app-my-lib-test',
  templateUrl: './my-lib-test.component.html',
  styleUrls: ['./my-lib-test.component.scss']
})
export class MyLibTestComponent implements OnInit {
  schools: ISchool[];
  constructor(
    private readonly dataService: DataProviderService
  ) {
    this.schools = [];
   }

  ngOnInit(): void {
    this.dataService.getSchools().subscribe(schools => this.schools = schools);
  }

}
