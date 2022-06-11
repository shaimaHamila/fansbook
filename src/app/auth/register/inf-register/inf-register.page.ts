import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Console } from 'console';
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
  validationUserFormGroup = {
    profiltPic:{ type: 'required', message: 'Pleas upload your photo!' },
    fullName: [
      { type: 'required', message: 'Pleas enter your Full Name!' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    ],
    country: { type: 'required', message: 'Please select your country!' },
    gender : { type: 'required', message: 'Please select your gender!' },
    phone: { type: 'required', message: 'Please enter your phone!' },
    minBudget: { type: 'required', message: 'Please enter your Minimum Budget!' },
    instagram: [
      { type: 'required', message: 'Please enter your instagrem link!' },
      { type: 'pattern', message: 'Please try to enter a valide instagram URL!' },
    ],
    facebook: [
      { type: 'required', message: 'Please enter your facebook link!' },
      { type: 'pattern', message: 'Please try to enter a valide facebook URL!' },
    ],
    youtube: [
      { type: 'required', message: 'Please enter your youtube link!' },
      { type: 'pattern', message: 'Please try to enter a valide youtube URL!' },
    ],

  };



  countrySelected: string[];
  imgUrl = '../../../assets/avatar/upload-img.jpg';
  fileToUpload: File;
  user: any;
  specialities: Array<string>;


  constructor(
    public auth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController,
    private navCtr: NavController,
    public loadingCtrl: LoadingController,
    private uploadService: UploadFileService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.initForm();
    console.log(this.userFormGroup.valid);

    console.log('Influencer on register');
    this.auth.user.subscribe(s => {
      console.log(s.uid);
      this.user = s;
    });
  };

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

  //Reactive forms
  initForm() {
    this.userFormGroup = this.formBuilder.group({
      fullName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      profiltPic: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      country: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      specialties: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      minBudget: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      facebook: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^(https?://www\.facebook\.com|fb\.me).*$')
      ])),
      instagram: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(https?://www\.instagram\.com).*$')
      ])),
      youtube: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(https?://www\.youtube\.com).*$')
      ])),

    });
  }

  getUserSpecialities(specialities){
    // console.log(specialities);
    this.specialities = specialities;
    this.userFormGroup.get('specialties').setValue(specialities);
  }

  //Create User as enterpreneur(Add data to entrepreneur collection)

  async addInfluencer(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const inf = new Influencer();
    inf.idInf = this.user.uid;
    inf.phoneNumber = this.userFormGroup.value.phone;
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
    this.userFormGroup.get('country').setValue(country);

  }


  loadApiData() {
    this.userFormGroup.setValue({
      profiltPic: '',
      phoneNumber: '',
      country: ''
    });
  }
}
