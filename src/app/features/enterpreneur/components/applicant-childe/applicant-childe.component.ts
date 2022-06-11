import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-applicant-childe',
  templateUrl: './applicant-childe.component.html',
  styleUrls: ['./applicant-childe.component.scss'],
})
export class ApplicantChildeComponent implements OnInit {
  @Input() applicantId: any;
  applicantName: string;
  applicantTitle: string;
  applicantImg: string;
  constructor(
    private loadingCtrl: LoadingController,
    private infService: InfService,
    private router: Router,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.getAppData();
  }

  async getAppData(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.infService.getInfById(this.applicantId).subscribe((inf)=>{
      this.applicantName = inf.fullName;
      this.applicantImg = inf.image;
      this.applicantTitle = inf.subTitle;
    });
    await loading.dismiss();
  }
  goEnpProfile(){
    this.modalController.dismiss();
    this.router.navigate([`/tabs/infs-profile/${this.applicantId}`]);
  }

}
