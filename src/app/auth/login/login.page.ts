import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  influencer: Influencer;
  entrepreneur: Entrepreneur;
  uid: string;
  userInfo: null;
  validationUserMessage= {
    email:[
      {type:'required', message:'Pleas enter your Email!'},
      {type:'pattern', message:'The Email entred is Incorrect. Try again'}
    ],
    password:[
      {type:'required', message:'Pleas enter your Password!'},
      {type:'minlength', message:'The Password must be at least 8 characters or more'}
    ]
  };
  validationloginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private navCtr: NavController,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private infService: InfService,
    private enpService: EnpService
    ) { }

  ngOnInit() {
    this.validationloginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  };



  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.uid = await this.authService.login(this.validationloginForm.value);

      console.log('User is logged in2222: ', this.uid);


    await loading.dismiss();

    this.infService.getInfById(this.uid).subscribe((inf)=>{
      if(inf){
        this.influencer = inf;
        // localStorage
        localStorage.setItem(`localStorage_uid_pfe_2022`, this.influencer.uid);
        localStorage.setItem(`localStorage_userType_pfe_2022`, this.influencer.userType);

        this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
      }else{
        this.enpService.getEnpById(this.uid).subscribe((enp)=>{
          if(inf){
            this.entrepreneur = enp;
            console.log('User is logged enp: ', enp);
            // localStorage
            localStorage.setItem(`localStorage_uid_pfe_2022`, this.entrepreneur.uid);
            localStorage.setItem(`localStorage_userType_pfe_2022`, this.entrepreneur.userType);

            this.router.navigateByUrl('/tabs/home', { replaceUrl: true });

          } else {
            this.showAlert('Login failed', 'Please try again!');
          }
        });
      }
    });

  }

  async showAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
