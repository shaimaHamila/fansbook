import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-edit-media-links',
  templateUrl: './edit-media-links.component.html',
  styleUrls: ['./edit-media-links.component.scss'],
})
export class EditMediaLinksComponent implements OnInit {
  @Input() uid: any;
  @Input() instagram: string;
  @Input() facebook: string;
  @Input() youtube: string;
  @Input() linkedin: string;
  @Input() tiktok: string;
  @Input() website: string;

  constructor(
    private modalController: ModalController,
    private infService: InfService,
    private lodingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  async updateInfSocialLinks(){
    const loading = await this.lodingCtrl.create();
    await loading.present();
    await this.infService.updateInfSocialLinks(
      this.uid,
      this.instagram,
      this.facebook,
      this.youtube ,

      this.linkedin ,
      this.tiktok ,
      this.website ,

      ).then(()=>{
      console.log('Updated successfuly');
      loading.dismiss();
    });
    this.modalController.dismiss();

  }
  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }


}
