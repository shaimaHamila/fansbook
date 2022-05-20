import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { UploadFileService } from 'src/app/services/uploadFileService/upload-file.service';
import { UserService } from 'src/app/services/useService/user.service';
import { Influencer } from 'src/app/shared/models/influencer';

@Component({
  selector: 'app-inf-register',
  templateUrl: './inf-register.page.html',
  styleUrls: ['./inf-register.page.scss'],
})
export class InfRegisterPage implements OnInit {

  //declare formgroup
  userFormGroup: FormGroup;
  countrySelected: string[];
  imgUrl = '../../../assets/avatar/upload-img.jpg';
  fileToUpload: File;
  user: any;
  specialities: Array<string>;
  // profiltPic: string;
  // phoneNumber: number;
  // gender: string;
  // country: string;
  // minBudget: number;
  socialLinksFollowers: string[];
  // email: string;

  constructor(
    public auth: AngularFireAuth, private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController, private navCtr: NavController,
    public loadingCtrl: LoadingController,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    this.initForm();
    console.log('Influencer on register');
    this.auth.user.subscribe(s => {
      console.log(s.uid);
      this.user = s;
    });
  };

  //Uploade user image
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log(file.item(0));
    //Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) =>{
      this.imgUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);

  }

  //Reactive forms
  initForm() {
    this.userFormGroup = new FormGroup({
      fullName: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender: new FormControl(''),
      country: new FormControl(''),
      minBudget: new FormControl(''),
      facebook: new FormControl(''),
      instagram: new FormControl(''),
      youtube: new FormControl(''),

    });
  }

  getUserSpecialities(specialities){
    // console.log(specialities);
    this.specialities = specialities;
  }

  //Create User as enterpreneur(Add data to entrepreneur collection)

  async addInfluencer(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const inf = new Influencer();
    inf.idInf = this.user.uid;
    inf.phoneNumber = this.userFormGroup.value.phoneNumber;
    inf.email = this.user.email;
    await this.uploadService.uploadUserFile('usersProfileImg', this.fileToUpload, this.user.uid).then((url)=>{
      inf.image = url;
      console.log(url);
    }) ;
    inf.country = this.countrySelected;
    inf.userType = 'influencer';
    inf.isPayed = false;
    inf.specialties = this.specialities;
    inf.facebook = this.userFormGroup.value.facebook;
    inf.instagram = this.userFormGroup.value.instagram;
    inf.youtube = this.userFormGroup.value.youtube;
    inf.minBudget = this.userFormGroup.value.minBudget;
    inf.fullName = this.userFormGroup.value.fullName;

    await this.userService.createInfluencer(inf);

    if(inf){
      this.router.navigateByUrl('/tabs/inf-profile', { replaceUrl: true });
    }else {
      this.showAlert('Registration failed', 'Please try again!');
    }

    await loading.dismiss();
  }

  async showAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }



  getCountry(country) {
    // console.log(country);
    this.countrySelected = country;
  }


  loadApiData() {
    this.userFormGroup.setValue({
      profiltPic: '',
      phoneNumber: '',
      country: ''
    });
  }
}
