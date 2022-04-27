import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnpRegisterPageRoutingModule } from './enp-register-routing.module';

import { EnpRegisterPage } from './enp-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnpRegisterPageRoutingModule
  ],
  declarations: [EnpRegisterPage]
})
export class EnpRegisterPageModule {}
