import { Component, OnInit } from '@angular/core';
import { Country } from '../models/Country';
import { ICountry } from '../models/ICountry';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  allCountries: ICountry[];
  selectedCountry: ICountry | undefined = undefined;
  selectedCountryCode: number = 0;

  constructor() {
    this.allCountries = [
      new Country(90, 'Turkey'),
      new Country(91, 'India'),
      new Country(92, 'Pakistan'),
      new Country(93, 'Afghanistan')
    ]
  }

  setCountryCode(code: number) {
    this.selectedCountryCode = code;
  }

  onCountryCodeChanged($event: any) {
    this.setCountryCode(Number($event.target.value));
  }

  changeSelectedCountry() {
    let index = this.allCountries.indexOf(this.selectedCountry as ICountry);
    index = index < 0 ? 0 : index;
    let nextIndex = (index + 1) % this.allCountries.length;
    this.selectedCountry = this.allCountries[nextIndex];
  }

}
