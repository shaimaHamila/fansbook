import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coll-form',
  templateUrl: './coll-form.page.html',
  styleUrls: ['./coll-form.page.scss'],
})
export class CollFormPage implements OnInit {

  specialities: Array<string>;
  countrySelected: string;


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  getUserSpecialities(specialities){
    // console.log(specialities);
    this.specialities = specialities;
  };

  getCountry(country){
    // console.log(country);
    this.countrySelected = country;
  };

  getDat(){
    console.log(this.countrySelected);
    console.log(this.specialities);

  }

  public listApplicants(itemId: number): void {
    this.navCtrl.navigateForward(['/coll-form/applicants-list']);
  }



}
