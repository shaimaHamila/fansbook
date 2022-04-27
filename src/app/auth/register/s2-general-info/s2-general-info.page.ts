import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s2-general-info',
  templateUrl: './s2-general-info.page.html',
  styleUrls: ['./s2-general-info.page.scss'],
})
export class S2GeneralInfoPage implements OnInit {
  countrySelected: string;
  img = '../../../assets/avatar/upload-img.jpg';
  userFormGroup: FormGroup;
  constructor(public auth: AngularFireAuth) { }
  ngOnInit() {
    this.initForm();
    console.log('User on s2');
    this.auth.user.subscribe(s => console.log(s));
  }
  initForm() {
    this.userFormGroup = new FormGroup({
      profiltPic: new FormControl(''),
      phoneNumber: new FormControl('')
    });
  }

  getCountry(country) {
    // console.log(country);
    this.countrySelected = country;
  }
  getDat() {
    console.log(this.userFormGroup.value.profiltPic);
    console.log(this.userFormGroup.value.phoneNumber);
    console.log(this.countrySelected);

  }

  loadApiData() {
    this.userFormGroup.setValue({
      profiltPic: '',
      phoneNumber: '',
      country: ''
    });
  }
}
