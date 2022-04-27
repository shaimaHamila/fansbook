import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  header='Add work experience';
  constructor() { }

  ngOnInit() {}
  getData(ngUserForm: NgForm){
    console.log(ngUserForm.value);

  }
}
