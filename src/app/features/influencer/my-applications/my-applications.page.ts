import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { CollaborationService } from 'src/app/services/collService/collaboration.service';
import { Collaboration } from 'src/app/shared/models/collaboration';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.page.html',
  styleUrls: ['./my-applications.page.scss'],
})
export class MyApplicationsPage implements OnInit {


  collaborations: Collaboration[];
  filterCollaborations: Collaboration[];

  //Get the current user uid from th lockal storage
  idInf = localStorage.getItem('localStorage_uid_pfe_2022');

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private collService: CollaborationService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.getAppColl();

  }
  filter(queryString: string){
    if(queryString){
      this.filterCollaborations = this.collaborations.filter(
        col =>col.colTitle.toLowerCase().includes(queryString.toLowerCase())
      );

    }
    else{
      this.filterCollaborations = this.collaborations;
    }
  }
  getAppColl(){
    this.collService.getAllInfApplicantColl(this.idInf).subscribe((res: Collaboration[]) =>{
      this.filterCollaborations = this.collaborations = res;
    });
  }

}
