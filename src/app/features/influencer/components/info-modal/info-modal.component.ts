import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {

  @Input() phoneNumber: number;
  @Input() email: string;
  @Input() country: string;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismissModalInfo(){
    this.modalCtrl.dismiss();
  }

}
