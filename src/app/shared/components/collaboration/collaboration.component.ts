import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CollModalComponent } from 'src/app/features/enterpreneur/components/coll-modal/coll-modal.component';
import { UpdateCollFormComponent } from 'src/app/features/enterpreneur/components/update-coll-form/update-coll-form.component';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { threadId } from 'worker_threads';
import { Collaboration } from '../../models/collaboration';
import { Entrepreneur } from '../../models/entrepreneur';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss'],
})
export class CollaborationComponent implements OnInit {

  @Input() collaboration= new Collaboration();
  @Input() isOwner: boolean;
  @Input() enp= new Entrepreneur();
  //Get the current user id from th lockal storage
  uid = localStorage.getItem('localStorage_uid_pfe_2022');
  isApplied: boolean;
  //Get the current user type from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022');
  isInfluencer = this.userType === 'influencer';

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private enpService: EnpService,
    private collService: CollaborationService,
    public alertController: AlertController
    ) { }



  ngOnInit() {
    this.getEnpData(this.collaboration.enpId);
    this.isInfApplied();
  }


  isInfApplied(){
    const isApplied = this.collaboration.applicants.indexOf(this.uid);
    if(isApplied >= 0){
      this.isApplied = true;
    }else{
      this.isApplied = false;
    }
  }
  //Get entrepreneur post data
  async getEnpData(enpId: any){
    await this.enpService.getEnpById(enpId).subscribe(res =>{
      this.enp = res;
    });
  }

  //Add an applicant
  async addApplicant(){
    await this.collService.updateApplicants(this.uid, this.collaboration.collId);
    const message = 'Applayed Successfuly <i class="fi fi-rr-check"></i>';
    this.presentAlert(message);
  }
  //Add an applicant
    async removeApplicant(){
    await this.collService.removeApplicants(this.uid, this.collaboration.collId);
    const message = 'canceled  <i class="fi fi-rr-check"></i>';
    this.presentAlert(message);

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

  getDate(){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const timeStampDate = this.collaboration.postDate;
    const date = new Date(timeStampDate.toDate());
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = days[date.getDay()];
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    return month + ' . ' + day + ' . ' + year;
  }

  // display collaboration info in a modal
  async  openCollDetailModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: CollModalComponent,
      //passing data
      componentProps:{
        collaboration: this.collaboration,
        isOwner: this.isOwner,
        enp: this.enp,
        isApplied: this.isApplied
      },
      cssClass: 'influencer-info-modal',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      initialBreakpoint: 1,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
  };

  //Update collaboration opp
    // display collaboration info in a modal
    async  openCollUpdatelModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component: UpdateCollFormComponent,
        //passing data
        componentProps:{
          collaboration: this.collaboration,
          isInfluencer: this.isInfluencer,
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };



}
