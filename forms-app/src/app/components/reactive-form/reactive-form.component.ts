import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationModel: FormGroup;
  
  constructor() { 
    this.registrationModel = new FormGroup({
      username: new FormControl('Usman'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl('Shakargarh'),
        state: new FormControl(''),
        country: new FormControl('')
      })
    })
  }

  ngOnInit(): void {
  }

}
