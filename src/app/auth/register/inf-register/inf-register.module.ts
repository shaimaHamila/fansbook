import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfRegisterPageRoutingModule } from './inf-register-routing.module';

import { InfRegisterPage } from './inf-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfRegisterPageRoutingModule
  ],
  declarations: [InfRegisterPage]
})
export class InfRegisterPageModule {}
