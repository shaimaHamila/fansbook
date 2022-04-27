import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CollModalComponent } from 'src/app/features/enterpreneur/components/coll-modal/coll-modal.component';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss'],
})
export class CollaborationComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  // display collaboration info in a modal
  async  openCollDetailModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: CollModalComponent,
      //passing data
      componentProps:{
        enpName: '',
        companyName: '',
        date: '',
        enpImaje: '',
        appliNum: '',
        colTitla: '',
        specialities: ['',''],
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
