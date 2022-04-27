import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { countries } from '../store/country-data-store';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {

  @Output() countrySlected = new EventEmitter<string>();
  @Input() isMultiSelect: boolean;


  country = new FormControl('');
  //Get instance from country data store class
  public countries: any = countries;

  constructor() { };
  ngOnInit() {};

  sendCountrySelected(){
    // console.log(this.country);
    //this.countrySlected.emit(this.country);
    this.countrySlected.emit(this.country.value);
  }
}
