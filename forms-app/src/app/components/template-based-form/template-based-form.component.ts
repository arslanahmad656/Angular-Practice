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
  interestValid: boolean;
  
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
    this.interestValid = false;
  }

  ngOnInit(): void {
    this.registrationModel = {
      name: 'Asim Kabeer',
      email: 'asim_456@outlook.com',
      interest: 'i am this    ',
      phone: '030077778811',
      shift: Shift.Default,
      address: {
        street: 'Mughal Pura',
        city: 'Shakargarh'
      },
      subscribeForNews: false
    }

    this.setInterestValue(this.registrationModel.interest);
  }

  setInterestValue(interest: string): void {
    this.interestValid = this.interests.indexOf(interest) > -1;
  }
}
