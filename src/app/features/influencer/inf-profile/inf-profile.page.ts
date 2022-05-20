import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';
import { UploadFileService } from 'src/app/services/uploadFileService/upload-file.service';
import { UserService } from 'src/app/services/useService/user.service';
import { Experience } from 'src/app/shared/models/Experience';
import { Influencer } from 'src/app/shared/models/influencer';
import { EditBioComponent } from '../components/edit-profile-modals/edit-bio/edit-bio.component';
import { EditBugetComponent } from '../components/edit-profile-modals/edit-buget/edit-buget.component';
import { EditExperienceComponent } from '../components/edit-profile-modals/edit-experience/edit-experience.component';
import { EditInfoComponent } from '../components/edit-profile-modals/edit-info/edit-info.component';
import { EditMediaLinksComponent } from '../components/edit-profile-modals/edit-media-links/edit-media-links.component';
import { EditSpecialitiesComponent } from '../components/edit-profile-modals/edit-specialities/edit-specialities.component';
import { ExperienceComponent } from '../components/addExperience/experience.component';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';
import { Recommendation } from 'src/app/shared/models/Recommendation';
import { RecommendationService } from 'src/app/services/recoService/recommendation.service';

@Component({
  selector: 'app-inf-profile',
  templateUrl: './inf-profile.page.html',
  styleUrls: ['./inf-profile.page.scss'],
})
export class InfProfilePage implements OnInit {
  ratingsNb: number;
  avgRatung=0;
  isExist: boolean; // Check whether the Influencer has recommendations or not
  recommendations: Recommendation[]; //for all inf recommendations

  //Influencer Experience
  experiences: Experience[];
  //For the progress bar to earn a star
  progress = 0;
  progressPercent = 0;
  //Get the current user uid from th lockal storage
  uid = localStorage.getItem('localStorage_uid_pfe_2022');
  infData= new Influencer();
  show= false;
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
   private infService: InfService,
   private uploadService: UploadFileService,
   private recoService: RecommendationService,
   ) {}



  ngOnInit() {
    this.getInfData();
    this.getInfExp();
    this.getInfReco(); //get all inf recommendation's
    //  this.infService.instagramSyncData('hamila_chaima');
  };

  //get all inf recommendation
  async getInfReco(){
    await this.recoService.getInfReco(this.uid).subscribe((data)=>{
      if(data.length > 0){
        this.isExist = true;
        this.recommendations = data;
        this.ratingsNb = data.length;
        this.recommendations.forEach(rec => {
          this.avgRatung = this.avgRatung + rec.starNb;
          console.log(this.avgRatung);
          console.log(rec);
        });
        console.log(this.recommendations);

        this.avgRatung = this.avgRatung / this.ratingsNb;

      }else{
        this.isExist = false;
      }
    });
  };
  //Get influencer experience
  getInfExp(){
    this.infService.getInfExp(this.uid).subscribe((exp)=>{
      this.experiences = exp;
    });
  }

  //Display Experience time
  getExperienceTime(experience: Experience){
    let date: string;
    if (experience.isWorking){
      date = experience.startDate +' - Present.';
      return date;
    }else{
      date = experience.startDate +' - ' + experience.endDate;
      return date;
    }
  }

  //Get Inf date
  async getInfData(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.infService.getInfById(this.uid).subscribe(inf=>{
    console.log('current inf user', inf);
    //console.log('current inf user', inf.phoneNumber);
    this.infData = inf;
    //profile building
    let p= 0;
    for(const i in this.infData){
      if(i !== 'undifinde'){
        p = p + 0.05;
      }
    }
    this.progress = parseFloat(p.toFixed(2));
    console.log(p.toFixed(2));
    });

    await loading.dismiss();
  }

  //Upload Cover Photo
  async uploadCoverPhoto(file: FileList){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.uploadService.uploadUserFile('usersCoverPhoto', file.item(0), this.infData.idInf).then( (url)=>{
      this.infService.updateCoverPic(this.infData.idInf, url);
    }) ;
    await loading.dismiss();
  }



  async uploadProfilePhoto(file: FileList){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.uploadService.uploadUserFile('usersProfileImg', file.item(0), this.infData.idInf).then( (url)=>{
      this.infService.updateProfilePic(this.infData.idInf, url);
    }) ;
    await loading.dismiss();
  }



  //ionic rating component
  segmentChanged(event: any){
    console.log(event.target.value);
  };




  // display influencer contact info in a modal
  async  openInfoModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      //passing data
      componentProps:{
        phoneNumber: this.infData.phoneNumber,
        email: this.infData.email,
        country: this.infData.country
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
   async  openEditInfoModal(){
    const modal = await this.modalCtrl.create({
      component:EditInfoComponent,
      //passing data
      componentProps:{
        uid: this.uid,
        phoneNum: this.infData.phoneNumber,
        country: this.infData.country,
        subTitle: this.infData.subTitle,
      },
      cssClass: 'influencer-info-modal',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      initialBreakpoint: 1,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
  };

    // Edit User Bio modal
    async  editBioModal(){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:EditBioComponent,
        //passing data
        componentProps:{
          uid: this.uid,
          bio: this.infData.bio
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
          uid: this.uid,
          minBuget: this.infData.minBudget
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 0.5,
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
          uid: this.uid,
          specialties: this.infData.specialties
        },
        cssClass: 'influencer-info-modal',
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop(),
        initialBreakpoint: 0.5,
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
          uid: this.uid,
          instagram: this.infData.instagram,
          facebook: this.infData.facebook,
          youtube: this.infData.youtube,
          linkedin: this.infData.linkedin,
          tiktok: this.infData.tiktok,
          website: this.infData.website,
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
    async  editExperienceModal(experience: Experience){
      //console.log('open');
      const modal = await this.modalCtrl.create({
        component:EditExperienceComponent,
        //passing data
        componentProps:{
          idInf: this.uid,
          experience,
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
          idInf: this.uid,
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
