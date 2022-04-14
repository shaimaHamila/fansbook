import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';

@Component({
  selector: 'app-inf-profile',
  templateUrl: './inf-profile.page.html',
  styleUrls: ['./inf-profile.page.scss'],
})
export class InfProfilePage implements OnInit {


  public rating: any;

  //For slides(social media followers)
  option = {
    slidesPerView: 1.8,
    centredSlides: true,
    loop: true,
    spaceBetween: 0
  };
  socialMedia ={
    slidesPerView: 2,

  };
  recommendation = {
    loop: true,
    spaceBetween: 20,
    centredSlides: true,
    autoplay: true

  };
  galleryType = 'photos';

  //constructor
  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }



  ngOnInit() {
  };

  //ionic rating component
  segmentChanged(event: any){
    console.log(event.target.value);
  };
  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
  };


  //Rating write cmnt and give stars
  async showAlert(){
    await this.alertCtrl.create({
      subHeader: 'Evaluate your experience working with Marvin',
      inputs: [
        { type: 'textarea', name: 'recommendation', placeholder: 'Give Marvin an honest recommendation ..'}
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Next', handler: (res) => {
            this.imageAlert();
          }
        }

      ]
    }).then(res => res.present());
  }

  //Rating Upload document alert
  async imageAlert(){
    await this.alertCtrl.create({
      subHeader: 'Upload a photo (can be a screenshot of messages) or a document that proves that you have worked together',
      inputs: [
        { }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Next', handler: (res) => {
            console.log(res.recommendation);
          }
        }

      ]
    }).then(res => res.present());
  }

  // display influencer contact info in a modal
  async  openInfoModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      //passing data
      componentProps:{
        phoneNum: '+216 22016583',
        email: 'hamilachaima18@gmail.com',
        country: 'Tunis',
        city: 'Sousse',
      },
      cssClass: 'influencer-info-modal',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
  };

}
