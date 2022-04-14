import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S1UsertypePageRoutingModule } from './s1-usertype-routing.module';

import { S1UsertypePage } from './s1-usertype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S1UsertypePageRoutingModule
  ],
  declarations: [S1UsertypePage]
})
export class S1UsertypePageModule {}
