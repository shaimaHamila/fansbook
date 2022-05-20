import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enp-filter-modal',
  templateUrl: './enp-filter-modal.component.html',
  styleUrls: ['./enp-filter-modal.component.scss'],
})
export class EnpFilterModalComponent implements OnInit {
  countriesSelected: string[];
  specialities: string[];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  filterColl(){
    console.log(this.countriesSelected, this.specialities);
  }

  cancel(){
    this.modalCtrl.dismiss();
  }
  getCountry(country) {
    // console.log(country);
    this.countriesSelected = country;
  }
  getUserSpecialities(specialities){
    // console.log(specialities);
    this.specialities = specialities;
  }
}
