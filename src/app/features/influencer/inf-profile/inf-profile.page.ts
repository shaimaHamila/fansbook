import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/useService/user.service';
import { EditBioComponent } from '../components/edit-profile-modals/edit-bio/edit-bio.component';
import { EditBugetComponent } from '../components/edit-profile-modals/edit-buget/edit-buget.component';
import { EditMediaLinksComponent } from '../components/edit-profile-modals/edit-media-links/edit-media-links.component';
import { EditSpecialitiesComponent } from '../components/edit-profile-modals/edit-specialities/edit-specialities.component';
import { ExperienceComponent } from '../components/edit-profile-modals/experience/experience.component';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';

@Component({
  selector: 'app-inf-profile',
  templateUrl: './inf-profile.page.html',
  styleUrls: ['./inf-profile.page.scss'],
})
export class InfProfilePage implements OnInit {


  public rating: any;

  //For slides(recommendation)
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
  constructor(private alertCtrl: AlertController,
   private modalCtrl: ModalController,
   private userService: UserService,
   private navCtr: NavController,
   public loadingCtrl: LoadingController,
   ) {}



  ngOnInit() {
  };

  async saveInfluencer(){
  const loading = await this.loadingCtrl.create();
  await loading.present();

  //const user = await this.userService.createInfluencer();

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



  //Edit profile

    // Edit User Bio modal
    async  editBioModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:EditBioComponent,
        //passing data
        componentProps:{
          bio: '',
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };

    // Edit User min buget modal
    async  editBugetModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:EditBugetComponent,
        //passing data
        componentProps:{
          minBuget: 'hello my name chaima',
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };


    // Edit User specialities buget modal
    async  editSpecialitiestModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:EditSpecialitiesComponent,
        //passing data
        componentProps:{
          minBuget: ['S1', 'S2'],
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };

    // Edit User Sscial Media Links buget modal
    async  editSocialLinksModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component: EditMediaLinksComponent,
        //passing data
        componentProps:{
          links: ['S1', 'S2'],
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };

    // Edit User Experience buget modal
    async  editExperienceModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:ExperienceComponent,
        //passing data
        componentProps:{
          links: ['S1', 'S2'],
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1]

      });
      return await modal.present();
    };


    // Add User experience buget modal
    async  addExperienceModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:ExperienceComponent,
        //passing data
        componentProps:{
          links: ['Atheeeeeeeeeeeeeeeeeeeeeeb'],
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
