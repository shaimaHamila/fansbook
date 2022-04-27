import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss'],
})
export class SpecialitiesComponent implements OnInit {
  @Output() userSpecialities = new EventEmitter<string>();

  speciality: string;
  specialities = ['Speciality1', 'Speciality2', 'Speciality3', 'Speciality4', 'Speciality5'];
  constructor() { }
  ngOnInit() {};

  sendSpecialitiesData(){
    // console.log(this.userSpecialitiesForm.value);
    this.userSpecialities.emit(this.speciality);
  }
}
