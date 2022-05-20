import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-inf-card',
  templateUrl: './inf-card.component.html',
  styleUrls: ['./inf-card.component.scss'],
})
export class InfCardComponent implements OnInit {
  @Input() influencer: Influencer;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToInfProfile() {
    this.router.navigate([`/tabs/infs-profile/${this.influencer.idInf}`]);
  }

}
