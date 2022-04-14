import { Component,Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicRatingModule } from 'ionic-rating';
import { CollModalComponent } from '../../enterpreneur/components/coll-modal/coll-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public rating: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  //ionic rating component
  segmentChanged(event: any){
    console.log(event.target.value);
  };
  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
  };

  // display influencer contact info in a modal
  async  openInfoModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: CollModalComponent,
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
