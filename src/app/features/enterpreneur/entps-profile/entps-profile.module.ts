import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntpsProfilePageRoutingModule } from './entps-profile-routing.module';

import { EntpsProfilePage } from './entps-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntpsProfilePageRoutingModule
  ],
  declarations: [EntpsProfilePage]
})
export class EntpsProfilePageModule {}
