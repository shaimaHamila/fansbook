import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollFormPageRoutingModule } from './coll-form-routing.module';

import { CollFormPage } from './coll-form.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollFormPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CollFormPage]
})
export class CollFormPageModule {}
