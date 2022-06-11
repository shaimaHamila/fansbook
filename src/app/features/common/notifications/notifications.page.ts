import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map, switchMap } from 'rxjs/operators';
import { InfService } from 'src/app/services/infService/inf.service';
import { NotificationService } from 'src/app/services/notifService/notification.service';
import { Notification } from 'src/app/shared/models/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  //Get the current user id from th lockal storage
  uid = localStorage.getItem('localStorage_uid_pfe_2022');
  notifications: Notification[];
  constructor(
    private notifService: NotificationService,
    private infService: InfService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getEnpNotif();

  }
  //Get entrepreneur notifications
  async getEnpNotif() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.notifService.getUserNotif(this.uid).subscribe(res =>{
      this.notifications = res;

    });
    await loading.dismiss();
  }

  //Get entrepreneur notifications
  // async getEnpNotif() {
  //   return this.notifService
  //     .getUserNotif(this.uid)
  //     .pipe(
  //       switchMap((res) => res.map(i=>{
  //           this.infService.getInfById(i.fromId).subscribe(inf=>(inf.fullName, inf.image, i.createdAt, i.notifMessg));
  //         })

  //     ));
  // }

}
