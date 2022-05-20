import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  @Input() uid: any;
  @Input() phoneNum: string;
  @Input() country: string;
  @Input() subTitle: string;

  constructor(
    private infService: InfService,
    private modalController: ModalController,
    private lodingCtrl: LoadingController,
  ) { }

  ngOnInit() {

  }

  getCountry(country) {
    this.country = country;
  }

  async updateBio(){
    const loading = await this.lodingCtrl.create();
    await loading.present();
    await this.infService.updateInfInfo(this.uid, this.country, this.phoneNum, this.subTitle).then(()=>{
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
