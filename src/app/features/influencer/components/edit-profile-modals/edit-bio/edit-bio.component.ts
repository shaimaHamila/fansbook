import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.scss'],
})
export class EditBioComponent implements OnInit {
  @Input() uid: any;
  @Input() bio: string;


  constructor(
    private infService: InfService,
    private modalController: ModalController
  ) { }

  ngOnInit() {

  }
  updateBio(){
    this.infService.updateInfBio(this.uid, this.bio);
    this.modalController.dismiss();

  }
  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }
}
