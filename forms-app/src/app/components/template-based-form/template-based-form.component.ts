import { Component, OnInit } from '@angular/core';
import { BootcampRegistration } from 'src/app/models/BootcampRegistration';
import { Shift } from 'src/app/models/Shift';
import { bootcampInterests } from 'src/app/models/static-data';

@Component({
  selector: 'app-template-based-form',
  templateUrl: './template-based-form.component.html',
  styleUrls: ['./template-based-form.component.scss']
})
export class TemplateBasedFormComponent implements OnInit {
  registrationModel: BootcampRegistration;
  readonly interests: string[];

  constructor() { 
    this.registrationModel = {
      name: '',
      email: '',
      interest: '',
      phone: '',
      address: {
        city: '',
        street: '',
        country: '',
        state: ''
      },
      shift: Shift.Evening,
      subscribeForNews: false
    };

    this.interests = bootcampInterests.map(i => i[1]);
  }

  ngOnInit(): void {
    this.registrationModel = {
      name: 'Asim Kabeer',
      email: 'asim_456@outlook.com',
      interest: '',
      phone: '030077778811',
      shift: Shift.Default,
      address: {
        street: 'Mughal Pura',
        city: 'Shakargarh'
      },
      subscribeForNews: false
    }
  }

}
