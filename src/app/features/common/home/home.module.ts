import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {IonicRatingComponentModule} from 'ionic-rating-component';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CollModalComponent } from '../../enterpreneur/components/coll-modal/coll-modal.component';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicRatingComponentModule,
    SharedComponentsModule
  ],
  declarations: [HomePage,CollModalComponent]
})
export class HomePageModule {}
