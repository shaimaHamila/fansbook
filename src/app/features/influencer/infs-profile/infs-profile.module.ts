import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfsProfilePageRoutingModule } from './infs-profile-routing.module';

import { InfsProfilePage } from './infs-profile.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { RatingModalComponent } from '../components/rating-modal/rating-modal.component';
import { Recommendation } from 'src/app/shared/models/Recommendation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfsProfilePageRoutingModule,
    SharedComponentsModule,
    IonicRatingComponentModule,

  ],
  declarations: [InfsProfilePage, RatingModalComponent]
})
export class InfsProfilePageModule {}
