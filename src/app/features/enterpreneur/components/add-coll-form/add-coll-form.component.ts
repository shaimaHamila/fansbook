import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { serverTimestamp, Timestamp } from 'firebase/firestore';
import { AuthService } from 'src/app/services/authService/auth.service';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { Collaboration } from 'src/app/shared/models/collaboration';

@Component({
  selector: 'app-add-coll-form',
  templateUrl: './add-coll-form.component.html',
  styleUrls: ['./add-coll-form.component.scss'],
})
export class AddCollFormComponent implements OnInit {
  @Input() isUpdate: boolean;
  @Input() existColl: Collaboration;
  idEnp: string;
  collId: string;
  countrySelected: string;
  newColl = new Collaboration();
  successMessage: string;
  constructor(
    private navCtrl: NavController,
    private collService: CollaborationService,
    private modalCtrl: ModalController,
    private authService: AuthService,

  ) {
    this.authService.currentUser.subscribe(user=>{
      this.idEnp = user.uid;
    });
  }

  ngOnInit() {
  }


  async addCollOpp(form: NgForm){
    this.newColl.postDate = Timestamp.now() ;
    this.newColl.enpId = this.idEnp;
    this.newColl.country = this.countrySelected;
    await this.collService.addColl(this.newColl).
    then(() => this.successMessage= 'Added!');
    form.reset();
    this.modalCtrl.dismiss();

  }
  resetCollOpp(form: NgForm){
    form.reset();
  }

  getUserSpecialities(specialities){
    // console.log(specialities);
    this.newColl.specialties = specialities;

  };

  getCountry(country) {
    // console.log(country);
    this.countrySelected = country;
  }

}
