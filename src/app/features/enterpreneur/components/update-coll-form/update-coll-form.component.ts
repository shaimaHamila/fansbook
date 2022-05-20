import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { Collaboration } from 'src/app/shared/models/collaboration';

@Component({
  selector: 'app-update-coll-form',
  templateUrl: './update-coll-form.component.html',
  styleUrls: ['./update-coll-form.component.scss'],
})
export class UpdateCollFormComponent implements OnInit {

  @Input() collaboration: Collaboration;

  constructor(
    private serviceColl: CollaborationService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.collaboration);
  }

  getUserSpecialities(specialities){
    // console.log(specialities);
    this.collaboration.specialties = specialities;
  };

  // Update coll opp
  updateCollOpp(){
    this.serviceColl.updateCollOpp(this.collaboration).then(()=>{
      this.modalController.dismiss();
      console.log('Data add successfully');
    });
  }

    // Update coll opp
    deleteCollOpp(){
      this.serviceColl.deleteCollOpp(this.collaboration.collId);
        this.modalController.dismiss();
        console.log('Data deleted successfully');

    }

    cancelUpdateColl(){
      this.modalController.dismiss();
      window.location.reload();
    }
}
