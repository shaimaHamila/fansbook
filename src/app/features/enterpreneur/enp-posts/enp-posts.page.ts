import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { Collaboration } from 'src/app/shared/models/collaboration';
import { AddCollFormComponent } from '../components/add-coll-form/add-coll-form.component';
import { EnpFilterModalComponent } from '../components/enp-filter-modal/enp-filter-modal.component';

@Component({
  selector: 'app-enp-posts',
  templateUrl: './enp-posts.page.html',
  styleUrls: ['./enp-posts.page.scss'],
})
export class EnpPostsPage implements OnInit {

  collaborations: Collaboration[] = [];

  //User Role
  isEntrepreneur = true;
  idEnp: string;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private collService: CollaborationService,
    private authService: AuthService
    ) {
      this.idEnp = this.authService.currentUser.subscribe(user=>{
        this.idEnp = user.uid;
      });
    }

  ngOnInit() {
    this.collService.getAllColl().subscribe((res: Collaboration[]) =>{
      this.collaborations = res;
    });

  }



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

  //Add collaboration opp
    // display collaboration info in a modal
    async  openCollAddlModal(){
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
