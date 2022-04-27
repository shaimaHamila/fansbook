import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-media-links',
  templateUrl: './edit-media-links.component.html',
  styleUrls: ['./edit-media-links.component.scss'],
})
export class EditMediaLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  getData(ngUserForm: NgForm){
    console.log(ngUserForm.value.instagram);
    console.log(ngUserForm.value.facebook);
    console.log(ngUserForm.value.youtube);
  }

}
