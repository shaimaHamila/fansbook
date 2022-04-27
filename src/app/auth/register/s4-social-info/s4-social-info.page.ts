import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-s4-social-info',
  templateUrl: './s4-social-info.page.html',
  styleUrls: ['./s4-social-info.page.scss'],
})
export class S4SocialInfoPage implements OnInit {


  constructor() { }
  ngOnInit() {
  };
  getData(ngUserForm: NgForm){
    console.log(ngUserForm.value.instagram);
    console.log(ngUserForm.value.facebook);
    console.log(ngUserForm.value.youtube);
  }

}
