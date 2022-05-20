import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfService } from 'src/app/services/infService/inf.service';

@Component({
  selector: 'app-edit-specialities',
  templateUrl: './edit-specialities.component.html',
  styleUrls: ['./edit-specialities.component.scss'],
})
export class EditSpecialitiesComponent implements OnInit {
  //@Input() specialties: string[];
  @Input() uid: any;
  specialties: string[];
  isvalid = true;
  constructor(
    private infService: InfService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }


  getUserSpecialities(specialties){
    this.specialties = specialties;
    if( this.specialties.length === 0 ){
      this.isvalid = false;
      console.log(this.isvalid);
      console.log(this.specialties);
      console.log(this.specialties.length);
    }else{
      this.isvalid = true;
      console.log(this.isvalid);
      console.log(this.specialties);
      console.log(this.specialties.length);

    }
  }
  updateSpe(){
    this.infService.updateInfSpecialties(this.uid, this.specialties);
    this.modalController.dismiss();

  }
  cancel(){
    this.modalController.dismiss();
    window.location.reload();
  }

}
