import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { Collaboration } from 'src/app/shared/models/collaboration';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-coll-modal',
  templateUrl: './coll-modal.component.html',
  styleUrls: ['./coll-modal.component.scss'],
})
export class CollModalComponent implements OnInit {
  @Input() collaboration: Collaboration;
  @Input() isOwner: boolean;
  @Input() enp= new Entrepreneur();
  //Get the current user id from th lockal storage
  uid = localStorage.getItem('localStorage_uid_pfe_2022');
  //Get the current user type from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022');
  isInfluencer = this.userType === 'influencer';
  isApplied: boolean;

  constructor(
    private collService: CollaborationService,
    public alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.isInfApplied();
  }
  isInfApplied(){
    if(this.collaboration.applicants){
      const isApplied = this.collaboration.applicants.indexOf(this.uid);
      if(isApplied >= 0){
        this.isApplied = true;
      }else{
        this.isApplied = false;
      }
    }else{
      this.isApplied = false;
    }

  }
  //Add an applicant
  async addApplicant(){
    await this.collService.updateApplicants(this.uid, this.collaboration.collId).then(()=>{
      this.modalController.dismiss();
      const message = 'Applayed Successfuly <i class="fi fi-rr-check"></i>';
      this.presentAlert(message);
    });

  }
  //Add an applicant
    async removeApplicant(){
    await this.collService.removeApplicants(this.uid, this.collaboration.collId).then(()=>{
      this.modalController.dismiss();
      const message = 'canceled  <i class="fi fi-rr-check"></i>';
      this.presentAlert(message);
    });


  }


  //alert
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,

    });

    await alert.present();

    await alert.onDidDismiss();
  }

  cancel(){
    this.modalController.dismiss();
  }

  getDate(){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const timeStampDate = this.collaboration.postDate;
    const date = new Date(timeStampDate.toDate());
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = days[date.getDay()];
    return month + ' . ' + day + ' . ' + year;
  }

}
