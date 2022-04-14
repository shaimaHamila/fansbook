import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S4SocialInfoPageRoutingModule } from './s4-social-info-routing.module';

import { S4SocialInfoPage } from './s4-social-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S4SocialInfoPageRoutingModule
  ],
  declarations: [S4SocialInfoPage]
})
export class S4SocialInfoPageModule {}
