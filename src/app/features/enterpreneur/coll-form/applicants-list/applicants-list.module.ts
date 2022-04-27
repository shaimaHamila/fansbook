import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicantsListPageRoutingModule } from './applicants-list-routing.module';

import { ApplicantsListPage } from './applicants-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicantsListPageRoutingModule
  ],
  declarations: [ApplicantsListPage]
})
export class ApplicantsListPageModule {}
