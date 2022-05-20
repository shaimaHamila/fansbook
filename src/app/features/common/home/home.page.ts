import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { IonicRatingModule } from 'ionic-rating';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Collaboration } from 'src/app/shared/models/collaboration';
import { Influencer } from 'src/app/shared/models/influencer';
import { CollModalComponent } from '../../enterpreneur/components/coll-modal/coll-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  rating: any;
  collaborations: Collaboration[] = [];
  influencers: Influencer[];
  infNumber = 0;
  enpNumber = 0;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private collService: CollaborationService,
    private loadingCtrl: LoadingController,
    private serviceInf: InfService,
    private serviceEnp: EnpService
    ) { }

  ngOnInit() {
    this.getAllEnpColl();
    this.getAllInfluencers();
    this.getAllEntps();
  };

  async getAllEnpColl(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.collService.getAllColl().subscribe((res: Collaboration[]) =>{
      this.collaborations = res;
      //console.log(res);
    });
    loading.dismiss();
  }

  async getAllInfluencers(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.serviceInf.getInfList().subscribe((infs)=>{
    this.influencers = infs;
    this.infNumber = this.influencers.length;
    });
    await loading.dismiss();
  }
  async getAllEntps(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.serviceEnp.getEnpList().subscribe((enps)=>{
    this.enpNumber = enps.length;
    });
    await loading.dismiss();
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






  // // Fill Coll Opp modal modal
  // async  openCollFormModal(){
  //   //console.log('open');
  //   const modal = await this.modalCtrl.create({
  //     component: CollFormModalComponent,
  //     //passing data
  //     componentProps:{
  //       enpName: '',
  //       companyName: '',
  //       date: '',
  //       enpImaje: '',
  //       appliNum: '',
  //       colTitla: '',
  //       specialities: ['',''],
  //       city: 'Sousse',
  //     },
  //     cssClass: 'influencer-info-modal',
  //     swipeToClose: true,
  //     presentingElement: await this.modalCtrl.getTop(),
  //     initialBreakpoint: 0.5,
  //   breakpoints: [0, 0.5, 1]

  //   });
  //   return await modal.present();
  // };

}
