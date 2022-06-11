import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Collaboration } from '../../models/collaboration';
import { Influencer } from '../../models/influencer';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss'],
})
export class NotifComponent implements OnInit {
  @Input() notification: Notification;
  userFullName: string;
  userImg: string;
  colTitle: string;
  idInf: any;
  constructor(
    private infService: InfService,
    private loadingCtrl: LoadingController,
    private collService: CollaborationService,
    private router: Router,
    private enpService: EnpService
  ) { }

  ngOnInit() {
    this.getNotifData();
  }

  // Get influencer who send notification
  async getNotifData(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.notification.notifType === 'applicant'){
      await this.infService.getInfById(this.notification.fromId).subscribe(inf=>{
        this.userFullName = inf.fullName;
        this.userImg = inf.image;
        this.idInf = inf.idInf;
        });
        await this.collService.getcCollById(this.notification.collId).subscribe((res) =>{
          this.colTitle = res.colTitle;
        });
    }else if(this.notification.notifType === 'rating'){
      await this.enpService.getEnpById(this.notification.fromId).subscribe(enp=>{
        this.userFullName = enp.fullName;
        this.userImg = enp.image;
        });
    }


    await loading.dismiss();

  }

  goEnpPosts(){
    if(this.notification.notifType === 'applicant'){
      this.router.navigate([`/tabs/infs-profile/${this.idInf}`]);
    }
    else if(this.notification.notifType === 'rating'){
      this.router.navigate([`/tabs/inf-profile`]);
    }
  }

}
