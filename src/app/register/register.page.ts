import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validationUserMessage={
    fullName:[
      {type:'required', message:'Pleas enter your Full Name!'},
      {type: 'minlength', message: 'Username must be at least 5 characters long' },
      {type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    ],
    email:[
      {type:'required', message:'Pleas enter your Email!'},
      {type:'pattern', message:'The Email entred is Incorrect. Try again'}
    ],
    password:[
      {type:'required', message:'Pleas enter your Password!'},
      {type:'pattern', message:'The password must contain a mix of letters and numbrs.'},
      {type:'minlength', message:'Password must be at least 8 characters long'}
    ],
    confirmPassword:[
      {type:'required', message:'Pleas confirm your Password!'},
      {type:'invalid', message:'Password mismatch!'}
    ],
    userType:[
      {type:'required', message:'Pleas select User Type!'},
    ],
    terms:[
      {type:'requiredTrue', message:'You must accept terms and conditions'},
    ]
  };

  validationRegisterForm: FormGroup;
  loading: any;

  constructor(public formBuilder: FormBuilder, private router: Router,
    private alertCtrl: AlertController,private navCtr: NavController, public loadingCtrl: LoadingController) {
      this.loading = this.loadingCtrl;
     }

     passwordConfirming(c: AbstractControl): { invalid: boolean }
     {
       if (c.get('password').value !== c.get('confirmPassword').value) {
           return {invalid: true};
     }
   }

  ngOnInit() {

    this.validationRegisterForm = this.formBuilder.group({
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])),
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
      userType: new FormControl('',Validators.compose([
        Validators.required
      ])),
      terms: new FormControl(false, Validators.compose([
        Validators.requiredTrue
      ]))
    },{validator: this.passwordConfirming});

  };

}
