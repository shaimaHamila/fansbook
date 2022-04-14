import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {IonicRatingComponentModule} from 'ionic-rating-component';

import { CollOppPageRoutingModule } from './coll-opp-routing.module';

import { CollOppPage } from './coll-opp.page';
import { EnpFilterModalComponent } from '../components/enp-filter-modal/enp-filter-modal.component';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollOppPageRoutingModule,
    IonicRatingComponentModule,
    SharedComponentsModule
  ],
  declarations: [CollOppPage, EnpFilterModalComponent]
})
export class CollOppPageModule {}
