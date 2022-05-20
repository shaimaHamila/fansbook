import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { Collaboration } from 'src/app/shared/models/collaboration';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { AddCollFormComponent } from '../components/add-coll-form/add-coll-form.component';
import { EnpFilterModalComponent } from '../components/enp-filter-modal/enp-filter-modal.component';

@Component({
  selector: 'app-coll-opp',
  templateUrl: './coll-opp.page.html',
  styleUrls: ['./coll-opp.page.scss'],
})
export class CollOppPage implements OnInit {
  collaborations: Collaboration[];
  filterCollaborations: Collaboration[];
  //Get the current user type from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022');
  enp = new Entrepreneur();
  //User Role
  isEntrepreneur = this.userType === 'entrepreneur';
  constructor(private modalCtrl: ModalController,
    private router: Router,
    private collService: CollaborationService,
    private enpService: EnpService,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.getAllEnpColl();
  }

  filter(queryString: string){
    if(queryString){
      this.filterCollaborations = this.collaborations.filter(
        col =>col.colTitle.toLowerCase().includes(queryString.toLowerCase())
      );

    }
    else{
      this.filterCollaborations = this.collaborations;
    }
  }

  async getAllEnpColl(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.collService.getAllColl().subscribe((res) =>{
      this.filterCollaborations = this.collaborations = res;
    });
    loading.dismiss();
  }



  // display influencer contact info in a modal
  async  openInfFilterModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: EnpFilterModalComponent,
      //passing data
      componentProps:{
        country: 'Tunis',
      },
      cssClass: 'influencer-info-modal',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      initialBreakpoint: 1,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
  };


  //Add collaboration opp
    // display collaboration info in a modal
    async  openCollUpdatelModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component: AddCollFormComponent,
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
