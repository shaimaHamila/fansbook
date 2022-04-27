import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-s3-work-info',
  templateUrl: './s3-work-info.page.html',
  styleUrls: ['./s3-work-info.page.scss'],
})
export class S3WorkInfoPage implements OnInit {
  specialities: Array<string>;
  userFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.userFormGroup = new FormGroup({
      minBudget: new FormControl(''),

    });
  }
  getUserSpecialities(specialities){
    // console.log(specialities);
    this.specialities = specialities;
  }

  getDat(ngUserForm: NgForm){
    console.log(ngUserForm.value.minBudget);
    console.log(ngUserForm.valid);
    console.log(this.specialities);

  }
}
