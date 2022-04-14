import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnpFilterModalComponent } from '../components/enp-filter-modal/enp-filter-modal.component';

@Component({
  selector: 'app-coll-opp',
  templateUrl: './coll-opp.page.html',
  styleUrls: ['./coll-opp.page.scss'],
})
export class CollOppPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  // display influencer contact info in a modal
  async  openInfFilterModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: EnpFilterModalComponent,
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
      initialBreakpoint: 1,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
  };


}
