import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';
import { Experience } from 'src/app/shared/models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() idInf: any;
  header='Add work experience';
  experience = new Experience();
  constructor(
    private infService: InfService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {}
  async addExperiencr(ngUserForm: NgForm){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.experience.idInf = this.idInf;
    this.experience.createdAt = Timestamp.now() ;

    await this.infService.addInfExp(this.experience).then( ()=>{
      console.log('Experience added successfuly');
      this.modalController.dismiss();
    });
    await loading.dismiss();

  }

  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }
}
