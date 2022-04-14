import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicRatingComponentModule} from 'ionic-rating-component';

import { IonicModule } from '@ionic/angular';

import { InfProfilePageRoutingModule } from './inf-profile-routing.module';
import { InfProfilePage } from './inf-profile.page';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfProfilePageRoutingModule,
    IonicRatingComponentModule,
    SharedComponentsModule

  ],
    declarations: [InfProfilePage, InfoModalComponent]
})
export class InfProfilePageModule {}
