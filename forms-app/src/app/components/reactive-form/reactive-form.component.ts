import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formGroupRequiredValidator } from 'src/app/validators/form-group-required.validator';
import { sameNameValidator } from 'src/app/validators/same-name.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationModel: FormGroup;

  get username() {
    return this.registrationModel.get('username');
  }

  get password() {
    return this.registrationModel.get('password');
  }

  get confirmPassword() {
    return this.registrationModel.get('confirmPassword');
  }

  get street() {
    return this.registrationModel.get('address')?.get('street');
  }

  get city() {
    return this.registrationModel.get('address')?.get('city');
  }

  get state() {
    return this.registrationModel.get('address')?.get('state');
  }

  get country() {
    return this.registrationModel.get('address')?.get('country');
  }

  get address() {
    return this.registrationModel.get('address');
  }
  
  constructor(
    private readonly formBuilder: FormBuilder
    ) {
    let group = this.formBuilder.group.bind(this.formBuilder);
    let control = this.formBuilder.control.bind(this.formBuilder);
    this.registrationModel = group({
      username: control('', Validators.required),
      password: control(''),
      confirmPassword: control(''),
      address: group({
        street: control(''),
        city: control('Shakargarh'),
        state: control(''),
        country: control('')
      }, {validator: formGroupRequiredValidator(['street', 'city', 'country'])})
    }, {validator: sameNameValidator(['password', 'confirmPassword'])});  
  }

  ngOnInit(): void {
  }

}
