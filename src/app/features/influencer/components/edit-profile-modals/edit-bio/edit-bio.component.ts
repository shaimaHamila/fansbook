import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.scss'],
})
export class EditBioComponent implements OnInit {
  bio;
  constructor() { }

  ngOnInit() {
    console.log(this.bio);
  }

}
