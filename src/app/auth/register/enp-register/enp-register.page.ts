import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { UploadFileService } from 'src/app/services/uploadFileService/upload-file.service';
import { UserService } from 'src/app/services/useService/user.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Component({
  selector: 'app-enp-register',
  templateUrl: './enp-register.page.html',
  styleUrls: ['./enp-register.page.scss'],
})
export class EnpRegisterPage implements OnInit {
  //declare formgroup
  userFormGroup: FormGroup;
  validationUserFormGroup = {
    profiltPic:{ type: 'required', message: 'Pleas upload your photo!' },
    fullName: [
      { type: 'required', message: 'Pleas enter your Full Name!' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    ],
    country: { type: 'required', message: 'Please select your country!' },
    phone: { type: 'required', message: 'Please enter your phone!' },
    company: { type: 'required', message: 'Please enter your company!' },
  };



  countrySelected: string[];
  imgUrl = '../../../assets/avatar/upload-img.jpg';
  fileToUpload: File = null;
  user: any;
  constructor(
    public auth: AngularFireAuth, private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController, private navCtr: NavController,
    public loadingCtrl: LoadingController,
    private uploadService: UploadFileService,
    public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {

    this.initForm();

    console.log('User on s2');
    this.auth.user.subscribe(s => {
      console.log(s.uid);
      this.user = s;
    });

  };

  //Reactive forms
  initForm() {
    this.userFormGroup = this.formBuilder.group({
      fullName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ])),
      profiltPic: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      country: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      company: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  //Uploade user image
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.userFormGroup.get('profiltPic').setValue(file.item(0));
    //Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) =>{
      this.imgUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);

  }

  //Create User as enterpreneur(Add data to entrepreneur collection)
  async addEntrepreneur(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const enp = new Entrepreneur();
    enp.idEnp = this.user.uid;
    enp.fullName = this.userFormGroup.value.fullName;
    enp.phoneNumber = this.userFormGroup.value.phoneNumber;
    enp.companyName = this.userFormGroup.value.company;
    enp.email = this.user.email;
    await this.uploadService.uploadUserFile('usersProfileImg', this.fileToUpload, this.user.uid).then((url)=>{
      enp.image = url;
      console.log(url);
    }) ;
    enp.country = this.countrySelected;
    enp.userType = 'entrepreneur';

    await this.userService.creatEntrepreneur(enp);

    if(enp){

      this.router.navigateByUrl(`/tabs/entp-profile`, { replaceUrl: true });
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
    this.userFormGroup.get('country').setValue(country);

  }


}
