import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { EnpService } from 'src/app/services/enpService/enp.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-entp-list',
  templateUrl: './entp-list.page.html',
  styleUrls: ['./entp-list.page.scss'],
})
export class EntpListPage implements OnInit {
  entrepreneurs: Entrepreneur[];
  filterEntrepreneurs: Entrepreneur[];
  constructor(
    private enpService: EnpService,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.getEnpList();
  }

  filter(queryString: string){
    if(queryString){
      this.filterEntrepreneurs = this.entrepreneurs.filter(
        inf =>inf.fullName.toLowerCase().includes(queryString.toLowerCase()));
    }
    else{
      this.filterEntrepreneurs = this.entrepreneurs;
    }
  }
  async getEnpList(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.enpService.getEnpList().subscribe(enp =>{
      this.filterEntrepreneurs = this.entrepreneurs = enp;
    });
    loading.dismiss();

  }

  goToEnpProfile(idEnp: any){
    this.router.navigate([`/tabs/entps-profile/${idEnp}`]);

  }

}
