import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { UserService } from 'src/app/services/useService/user.service';
import { Influencer } from 'src/app/shared/models/influencer';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  validationRegisterForm: FormGroup;
  loading: any;
  validationUserMessage = {

    email: [
      { type: 'required', message: 'Please enter your Email!' },
      { type: 'pattern', message: 'The Email entred is Incorrect. Try again' }
    ],
    password: [
      { type: 'required', message: 'Please enter your Password!' },
      { type: 'pattern', message: 'The password must contain a mix of letters and numbrs.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Please confirm your Password!' },
      { type: 'invalid', message: 'Password mismatch!' }
    ],
    terms: [
      { type: 'requiredTrue', message: 'You must accept terms and conditions' },
    ]
  };



  constructor(
    public formBuilder: FormBuilder, private router: Router,
    private alertCtrl: AlertController, private navCtr: NavController,
    public loadingCtrl: LoadingController, private authService: AuthService,
    private userServ: UserService

  ) {
    this.loading = this.loadingCtrl;
  }

  // Easy access for form fields
  get email() {
    return this.validationRegisterForm.get('email');
  }

  get password() {
    return this.validationRegisterForm.get('password');
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }


  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.validationRegisterForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z]).{2,}$'),
        Validators.minLength(2)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      terms: new FormControl(false, Validators.compose([
        Validators.requiredTrue
      ]))
    }, { validator: this.passwordConfirming });

  }

  async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    let user: any;
    await this.authService.register(this.validationRegisterForm.value).then(u => {

      //console.log(u.user);
      if (u) {
        user = u.user;
      }
    });

    await loading.dismiss();

    if (user) {
      //console.log(user);
      // create Influencer Or Entrepreneur with the uid comes in the user object
      // all the user servie and create the profile based on selected user type
      // const ty = this.validationRegisterForm.value.userType;
      // if (ty === 'influencer') {
      //   const inf = new Influencer();
      //   inf.uid = user.uid;
      //   inf.phoneNumber = 12345647;
      //   this.userServ.createInfluencer(inf);
      // }
    this.authService.sendVerificationMail(user); // Sending email verification notification, when new user registers

     // this.router.navigateByUrl('/register/s1-usertype', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
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
