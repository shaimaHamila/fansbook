import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntpListPageRoutingModule } from './entp-list-routing.module';

import { EntpListPage } from './entp-list.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntpListPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EntpListPage]
})
export class EntpListPageModule {}
