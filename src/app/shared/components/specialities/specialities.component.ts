import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss'],
})
export class SpecialitiesComponent implements OnInit {
  @Output() userSpecialities = new EventEmitter<string>();
  @Input() isMultiSelect: boolean;
  @Input() isRequired: boolean;
  @Input() specialties: string[];
  speciality: string;
  specialities = [
    'Architecture',
    'Engineering',
    'OccupationsArts',
    'Design',
    'Entertainment',
    'Sports',
    'Media Occupations',
    'Building',
    'Grounds Cleaning',
    'Maintenance',
    'Business',
    ' Financial Operations',
    'Community and Social Services',
    'Computer',
    'Mathematical Occupations',
    'Construction',
    'Extractions',
    'Education',
    'Training',
    'Library',
    'Farming',
    'Fishing',
    'Forestry',
    'Food Preparation',
    ' Serving Related',
    'Healthcare',
    'Practitioners',
    'Technical Occupations',
    'Healthcare',
    'Beauty',
    'Support',
    'Installation, Maintenance, and Repair',
    ' Physical, and Social Science',
    'Management',
    'Personal Care',
    'Production',
    'Protective Service',
    'Sales and Related',
    'singer' ,
    'production' ,
    'wedding planner ',
    'event planner' ,
    'makeup artist'
  ];
  constructor() { }
  ngOnInit() {};

  sendSpecialitiesData(){
    // console.log(this.userSpecialitiesForm.value);
    this.userSpecialities.emit(this.speciality);
  }
}
