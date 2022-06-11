import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { NotificationService } from 'src/app/services/notifService/notification.service';
import { RecommendationService } from 'src/app/services/recoService/recommendation.service';
import { Influencer } from 'src/app/shared/models/influencer';
import { Recommendation } from 'src/app/shared/models/Recommendation';
import { Notification } from 'src/app/shared/models/notification';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss'],
})
export class RatingModalComponent implements OnInit {
  @Input() idInf: string;
  @Input() idEnp: string;
  recommendation = new Recommendation();
  isFilled = false; // Check whether the entrepreneur has filled the stars or not
  isExist: boolean; // Check whether the entrepreneur has given a recommendation or not
  notification = new Notification();

  constructor(
    private recoService: RecommendationService,
    public alertCtrl: AlertController,
    private modalctrl: ModalController,
    private notifService: NotificationService,

  ) { }

  ngOnInit() {
    this.getInfEnpRco();
  }

  onRateChange(event: any){
    console.log(event);
    this.recommendation.starNb = event;
    this.isFilled = true;
  }
  //add recommendation
  async addInfRec(){
    if(this.isFilled){
      this.recommendation.idInf =this.idInf;
      this.recommendation.idEnp =this.idEnp;
      await this.recoService.addRecommendation(this.recommendation).then(async () =>{
        this.modalctrl.dismiss();

        const header= 'Submitted';
        const message= 'Thanks for your feedbac';
        this.presentAlert(header, message);

        this.notification.forId = this.idInf;
        this.notification.fromId = this.idEnp;
        this.notification.notifType = 'rating';
        this.notification.notifMessg = 'gave you a recommendation';
        this.notification.createdAt = Timestamp.now();

        await this.notifService.addNotif(this.notification);
      });
    }else{
      const header= 'Alert';
      const message= 'You need to give the influencer at least one star';
      this.presentAlert(header, message);
    }
  }



  //Get recommendation if it is existe
  async getInfEnpRco(){
    await this.recoService.getInfEnpReco(this.idInf, this.idEnp).subscribe((data)=>{
      if(data.length > 0){
        this.isExist = true;
        this.recommendation = data[0];
      }else{
        this.isExist = false;
      }
    });
  }

  //update recommendation
  async updateInfRec(){
    await this.recoService.updateRecommendation(this.recommendation).then(()=>{
      this.modalctrl.dismiss();
      window.location.reload();
    });
  }
  //delete this recommndation
  async deletRec(){
    await this.recoService.deleteReco(this.recommendation.idRec).then(async ()=>{
      this.notification.forId = this.idInf;
      this.notification.fromId = this.idEnp;
      this.notification.notifType = 'rating';
      this.notification.notifMessg = 'removed his recommendation';
      this.notification.createdAt = Timestamp.now();

      await this.notifService.addNotif(this.notification);
      this.modalctrl.dismiss();
      window.location.reload();
    });
  }

  //Cancel the operation
  cancel(){
    this.modalctrl.dismiss();
    window.location.reload();
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //Rating Upload document alert
  async imageAlert(){
    await this.alertCtrl.create({
      subHeader: 'Upload a photo (can be a screenshot of messages) or a document that proves that you have worked together',
    }).then(res => res.present());
  }
}
