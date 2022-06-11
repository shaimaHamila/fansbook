import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  enp = new Entrepreneur();
  //id= null;
  idEnp: string;
  uid = localStorage.getItem('localStorage_uid_pfe_2022');
  countrySelected: string;

  constructor(
    public authService: AuthService,
    private enpService: EnpService,
    private route: Router
    ) {}

  ngOnInit() {
    this.getEnpData();
  };

  getEnpData(){
    this.enpService.getEnpById(this.uid).subscribe(user=>{
      console.log('current enp user', user);
      this.enp = user;
    });
  }

  //Update Entrepreneur profile
  updateEnpProfile(){
    this.enpService.updateEnp(this.enp).then(()=>{
      console.log('Profile Updated Successfuly');
      this.route.navigate(['tabs/entp-profile']);
    });
  }

  // Update entrepreneur profile
  deleteCollOpp(){
    this.enpService.deleteEnp(this.enp.idEnp);
    console.log('Profile deleted successfully');

  }

  getUserSpecialities($event){
    //this.collaboration.specialties = specialities;
  }
  getCountry(country) {
    // console.log(country);
    this.countrySelected = country;
  }

}
