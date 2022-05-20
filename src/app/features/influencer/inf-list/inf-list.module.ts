import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfListPageRoutingModule } from './inf-list-routing.module';
import {IonicRatingComponentModule} from 'ionic-rating-component';

import { InfListPage } from './inf-list.page';
import { InfFilterModalComponent } from '../components/inf-filter-modal/inf-filter-modal.component';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfListPageRoutingModule,
    IonicRatingComponentModule,
    SharedComponentsModule,
    ReactiveFormsModule

  ],
  declarations: [InfListPage, InfFilterModalComponent]
})
export class InfListPageModule {}
