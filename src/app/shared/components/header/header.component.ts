import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from '@firebase/util';
import { LoadingController } from '@ionic/angular';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  uid = localStorage.getItem('localStorage_uid_pfe_2022'); //Get the current user uid from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022'); //Get the current user type from th lockal storage
  userName: string;
  userImg: any;
  userURL: any;
  constructor(
    private loadingCtrl: LoadingController,
    private enpService: EnpService,
    private infService: InfService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.userType === 'influencer'){
      this.getInfData();
      this.userURL = '/tabs/inf-profile';
    }else{
      this.getEnpData();
      this.userURL = '/tabs/entp-profile';

    }

  }

  //Get Inf date
  async getInfData(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
     this.infService.getInfById(this.uid).subscribe(inf=>{
      this.userName = inf.fullName;
      this.userImg = inf.image;
     });
     await loading.dismiss();
  }

    //Get Enp date
    async getEnpData(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
       this.enpService.getEnpById(this.uid).subscribe(enp=>{
        this.userName = enp.fullName;
        this.userImg = enp.image;
       });
       await loading.dismiss();
    }
}
