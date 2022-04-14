import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {

  @Input() phoneNum: string;
  @Input() email: string;
  @Input() country: string;
  @Input() city: string;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismissModalInfo(){
    //console.log('Dismiss');
    this.modalCtrl.dismiss();
  }

}
