import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { UploadFileService } from 'src/app/services/uploadFileService/upload-file.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-entps-profile',
  templateUrl: './entps-profile.page.html',
  styleUrls: ['./entps-profile.page.scss'],
})
export class EntpsProfilePage implements OnInit {

  //id= null;
  idEnp: string;
  enpData = new Entrepreneur();
  uid: any;

  constructor(
    public authService: AuthService,
    private enpService: EnpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      //get inf id from url
      this.uid = this.activatedRoute.snapshot.paramMap.get('idEnp');
    }

  ngOnInit() {
    this.getEnpData();
  };

  getEnpData(){
    this.enpService.getEnpById(this.uid).subscribe(enp=>{
      console.log('current enp user', enp);
      this.enpData = enp;
    });
  }

  goToEnpChat(){
    this.router.navigate([`/tabs/entps-profile/${this.uid}/chat`]);
  }

}
