import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPswPageRoutingModule } from './forget-psw-routing.module';

import { ForgetPswPage } from './forget-psw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPswPageRoutingModule
  ],
  declarations: [ForgetPswPage]
})
export class ForgetPswPageModule {}
