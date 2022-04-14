import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfFilterModalComponent } from '../components/inf-filter-modal/inf-filter-modal.component';

@Component({
  selector: 'app-inf-list',
  templateUrl: './inf-list.page.html',
  styleUrls: ['./inf-list.page.scss'],
})
export class InfListPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  // display influencer contact info in a modal
  async  openInfFilterModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: InfFilterModalComponent,
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
