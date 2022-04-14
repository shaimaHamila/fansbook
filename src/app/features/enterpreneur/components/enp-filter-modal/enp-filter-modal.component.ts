import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enp-filter-modal',
  templateUrl: './enp-filter-modal.component.html',
  styleUrls: ['./enp-filter-modal.component.scss'],
})
export class EnpFilterModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

}
