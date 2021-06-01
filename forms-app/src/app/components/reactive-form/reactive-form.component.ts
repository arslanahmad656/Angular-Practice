import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControlOptions, FormArray, AbstractControl } from '@angular/forms';
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

  get email() {
    return this.registrationModel.get('email');
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

  get alternateAddresses(): FormArray {
    return this.registrationModel.get('alternateAddresses') as FormArray;
  }
  
  constructor(
    private readonly formBuilder: FormBuilder
    ) {
    let group = this.formBuilder.group.bind(this.formBuilder);
    let control = this.formBuilder.control.bind(this.formBuilder);
    let array = this.formBuilder.array.bind(this.formBuilder);

    this.registrationModel = group({
      username: control('', Validators.required),
      password: control('', Validators.required),
      confirmPassword: control('', Validators.required),
      email: control('', [Validators.email]),
      subscribe: control(false),
      address: this.createAddressFields(),
      alternateAddresses: array([])
    }, {validator: sameNameValidator(['password', 'confirmPassword'])} as AbstractControlOptions);
  }

  ngOnInit(): void {
    this.registrationModel.get('subscribe')?.valueChanges.subscribe((subscribed: boolean) => {
      console.log('Subscribed value', subscribed);
      if (subscribed) {
        this.email?.setValidators([Validators.required, Validators.email]);
      } else {
        this.email?.setValidators(Validators.email);
      }

      this.email?.updateValueAndValidity();
    })
  }

  addAddress() {
    let addressGroup = this.createAddressFields('', 'Lahore');
    this.alternateAddresses.push(addressGroup);
  }

  createAddressFields(street = '', city = '', state = '', country = ''): FormGroup {
    let group = this.formBuilder.group.bind(this.formBuilder);
    let control = this.formBuilder.control.bind(this.formBuilder);
    
    let formGroup: FormGroup = group({
      street: control(street, Validators.required),
      city: control(city, Validators.required),
      state: control(state),
      country: control(country, Validators.required)
    });
    formGroup.setValidators(formGroupRequiredValidator(['street', 'city', 'country']));
    formGroup.updateValueAndValidity();

    return formGroup;
  }

  test(arg: any) {
    debugger;
    let control = arg as AbstractControl;
    let city = control?.get('city');
    console.log(arg);
  }

}
