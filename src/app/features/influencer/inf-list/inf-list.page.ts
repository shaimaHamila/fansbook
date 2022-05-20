import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InfService } from 'src/app/services/infService/inf.service';
import { Influencer } from 'src/app/shared/models/influencer';
import { InfFilterModalComponent } from '../components/inf-filter-modal/inf-filter-modal.component';

@Component({
  selector: 'app-inf-list',
  templateUrl: './inf-list.page.html',
  styleUrls: ['./inf-list.page.scss'],
})
export class InfListPage implements OnInit {
  influencers: Influencer[];
  filterInfluencers: Influencer[];
  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private serviceInf: InfService
    )
    {}

  ngOnInit() {
    this.getAllInfluencers();


  }
  filter(queryString: string){

    if(queryString){
      this.filterInfluencers = this.influencers.filter(
        inf =>inf.fullName.toLowerCase().includes(queryString.toLowerCase()));
    }
    else{
      this.filterInfluencers = this.influencers;
    }
  }

  async getAllInfluencers(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.serviceInf.getInfList().subscribe((infs)=>{
      this.filterInfluencers = this.influencers = infs;
    });
    await loading.dismiss();
  }

  // display influencer contact info in a modal
  async  openInfFilterModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: InfFilterModalComponent,
      //passing data
      componentProps:{

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
