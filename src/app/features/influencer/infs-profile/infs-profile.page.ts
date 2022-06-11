import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';
import { RecommendationService } from 'src/app/services/recoService/recommendation.service';
import { UserService } from 'src/app/services/useService/user.service';
import { Experience } from 'src/app/shared/models/Experience';
import { Influencer } from 'src/app/shared/models/influencer';
import { Recommendation } from 'src/app/shared/models/Recommendation';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';
import { RatingModalComponent } from '../components/rating-modal/rating-modal.component';

@Component({
  selector: 'app-infs-profile',
  templateUrl: './infs-profile.page.html',
  styleUrls: ['./infs-profile.page.scss'],
})
export class InfsProfilePage implements OnInit {

  isExist: boolean; // Check whether the Influencer has recommendations or not
  ratingsNb: number;
  avgRatung=0;
  roundAvgRating=0;
  recommendations: Recommendation[]; //for all inf recommendations

  //Influencer Experience
  experiences: Experience[];
  experienceExist: boolean;
  //For the progress bar to earn a star
  progress = 0;
  progressPercent = 0;
  //Get the current user uid from th lockal storage
  currentUID = localStorage.getItem('localStorage_uid_pfe_2022');
  //Get the current user type from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022');

  //Get the current user uid from th lockal storage
  uid: any;
  infData= new Influencer();
  show= false;
  public rating: any;

  //For slides(recommendation)
  recommendation = {
    loop: false,
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
   private activatedRoute: ActivatedRoute,
   private recoService: RecommendationService,
   private router: Router,
   ) {
     //get inf id from url
     this.uid = this.activatedRoute.snapshot.paramMap.get('idInf');
   }



  ngOnInit() {
    this.getEnpData(); //Get inf data

    this.getInfReco(); //get all inf recommendation's
    this.getInfExp();

  };

  //Get influencer experience
  getInfExp(){
    this.infService.getInfExp(this.uid).subscribe((exp)=>{
      this.experiences = exp;
      this.experienceExist = exp.length > 0;
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


  async getEnpData(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.infService.getInfById(this.uid).subscribe(inf=>{
      //console.log('current inf user', inf);
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
    //console.log(p.toFixed(2));
    });

    await loading.dismiss();
  }


  //get all inf recommendation
  async getInfReco(){

    await this.recoService.getInfReco(this.uid).subscribe((data)=>{
      this.avgRatung = 0;
      this.roundAvgRating = 0;
      if(data.length > 0){
        this.isExist = true;
        //console.log('data',data);

        this.recommendations = data;
        this.ratingsNb = data.length;


        this.recommendations.forEach(rec => {
          this.avgRatung = this.avgRatung + rec.starNb;
          //console.log('xxx',this.avgRatung);
          // console.log(rec);
        });

        this.avgRatung = this.avgRatung / this.ratingsNb;
        this.avgRatung = Number(this.avgRatung.toFixed(2));
        this.roundAvgRating = Math.round(this.avgRatung);

      }else{
        this.isExist = false;
        this.roundAvgRating = 1;


      }
    });


  };


  goToInfChat(){
    this.router.navigate([`/tabs/infs-profile/${this.uid}/chat`]);
  }


  // rating inf modal
  async  ratingModal(){
    //console.log('open');
    const modal = await this.modalCtrl.create({
      component: RatingModalComponent,
      //passing data
      componentProps:{
        idInf: this.uid,
        idEnp: this.currentUID
      },
      cssClass: 'influencer-info-modal',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1]

    });
    return await modal.present();
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




}
