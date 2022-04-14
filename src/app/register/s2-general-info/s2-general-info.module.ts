import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2GeneralInfoPageRoutingModule } from './s2-general-info-routing.module';

import { S2GeneralInfoPage } from './s2-general-info.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2GeneralInfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [S2GeneralInfoPage]
})
export class S2GeneralInfoPageModule {}
