import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent implements OnInit {
  @Input() collId: any;
  infsId: any[];
  constructor(
    private loadingCtrl: LoadingController,
    private collService: CollaborationService
  ) { }

  ngOnInit() {
    this.getApplicantsIds();

  }

  async getApplicantsIds(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.collService.getcCollById(this.collId).subscribe((res)=>{
      this.infsId = res.applicants;
    });
    await loading.dismiss();

  }
}
