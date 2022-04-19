import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    public formBuilder: FormBuilder, private router: Router,
    private alertCtrl: AlertController, private navCtr: NavController,
    public loadingCtrl: LoadingController, private authService: AuthService,
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

    const user = await this.authService.login(this.validationloginForm.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
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
