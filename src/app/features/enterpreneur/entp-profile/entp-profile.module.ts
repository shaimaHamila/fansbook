import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntpProfilePageRoutingModule } from './entp-profile-routing.module';

import { EntpProfilePage } from './entp-profile.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntpProfilePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EntpProfilePage]
})
export class EntpProfilePageModule {}
