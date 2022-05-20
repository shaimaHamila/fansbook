import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfRegisterPageRoutingModule } from './inf-register-routing.module';

import { InfRegisterPage } from './inf-register.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfRegisterPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [InfRegisterPage]
})
export class InfRegisterPageModule {}
