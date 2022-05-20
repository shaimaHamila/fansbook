import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnpRegisterPageRoutingModule } from './enp-register-routing.module';

import { EnpRegisterPage } from './enp-register.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnpRegisterPageRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [EnpRegisterPage]
})
export class EnpRegisterPageModule {}
