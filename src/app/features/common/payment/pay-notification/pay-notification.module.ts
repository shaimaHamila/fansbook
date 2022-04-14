import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayNotificationPageRoutingModule } from './pay-notification-routing.module';

import { PayNotificationPage } from './pay-notification.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayNotificationPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PayNotificationPage]
})
export class PayNotificationPageModule {}
