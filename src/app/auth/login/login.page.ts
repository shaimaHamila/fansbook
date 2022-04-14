import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.validationloginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  };



}
