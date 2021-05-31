import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationModel: FormGroup;
  
  constructor(
    private readonly formBuilder: FormBuilder
    ) {
    let group = this.formBuilder.group.bind(this.formBuilder);
    let control = this.formBuilder.control.bind(this.formBuilder);
    this.registrationModel = group({
      username: control('Usman'),
      password: control(''),
      confirmPassword: control(''),
      address: group({
        street: control(''),
        city: control('Shakargarh'),
        state: control(''),
        country: control('')
      })
    });
  }

  ngOnInit(): void {
  }

}
