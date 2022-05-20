import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';
import { Experience } from 'src/app/shared/models/Experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss'],
})
export class EditExperienceComponent implements OnInit {
  @Input() uid: any;
  @Input() experience: Experience;
  @Input() index: any;
  header='Add work experience';
  constructor(
    private infService: InfService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {}

  //Update exesting experience
  async updateExperiencr(ngUserForm: NgForm){
    const loading = await this.loadingCtrl.create();
    await loading.present();
      await this.infService.updateInfExp(this.experience).then( ()=>{
        console.log('Experience Updated successfuly');
        this.modalController.dismiss();
      });
      await loading.dismiss();
  }

  //Delete experience
  async deleteInfExp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.infService.removeInfExp(this.experience.idExp).then(()=>{
      this.modalController.dismiss();
      window.location.reload();
    });
    await loading.dismiss();

  }


  //Cancel the update
  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }

}
