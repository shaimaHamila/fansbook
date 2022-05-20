import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-edit-buget',
  templateUrl: './edit-buget.component.html',
  styleUrls: ['./edit-buget.component.scss'],
})
export class EditBugetComponent implements OnInit {
  @Input() minBuget: string;
  @Input() uid: string;
  constructor(
    private infService: InfService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {}
  async updateBio(){
    await this.infService.updateInfMinBudget(this.uid, this.minBuget).then(()=>{
      this.modalController.dismiss();
    });

  }
  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }

}
