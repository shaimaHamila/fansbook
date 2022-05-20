import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { UploadFileService } from 'src/app/services/uploadFileService/upload-file.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-entp-profile',
  templateUrl: './entp-profile.page.html',
  styleUrls: ['./entp-profile.page.scss'],
})
export class EntpProfilePage implements OnInit {
  //id= null;
  idEnp: string;
  enpData = new Entrepreneur();
  uid = localStorage.getItem('localStorage_uid_pfe_2022');

  constructor(
    public authService: AuthService,
    private enpService: EnpService,
    private uploadService: UploadFileService
    ) {}

  ngOnInit() {
    this.getEnpData();
    console.log('fuck',this.uid);
  };

  getEnpData(){
    this.enpService.getEnpById(this.uid).subscribe(enp=>{
      console.log('current enp user', enp);
      this.enpData = enp;
    });
  }
  async uploadCoverPhoto(file: FileList){
    await this.uploadService.uploadUserFile('usersCoverPhoto', file.item(0), this.enpData.idEnp).then( (url)=>{
      this.enpService.updateCoverPic(this.enpData.idEnp, url);
      console.log(url);
    }) ;
  }
  async uploadProfilePhoto(file: FileList){
    await this.uploadService.uploadUserFile('usersProfileImg', file.item(0), this.enpData.idEnp).then( (url)=>{
      this.enpService.updateProfilePic(this.enpData.idEnp, url);
      console.log(url);
    }) ;
  }

}
