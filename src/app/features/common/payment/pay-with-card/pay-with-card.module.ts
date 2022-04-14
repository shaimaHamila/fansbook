import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayWithCardPageRoutingModule } from './pay-with-card-routing.module';

import { PayWithCardPage } from './pay-with-card.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayWithCardPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PayWithCardPage]
})
export class PayWithCardPageModule {}
