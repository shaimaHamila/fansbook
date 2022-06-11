import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntpProfilePageRoutingModule } from './entp-profile-routing.module';

import { EntpProfilePage } from './entp-profile.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';
import { ApplicantsComponent } from '../components/applicants/applicants.component';
import { ApplicantChildeComponent } from '../components/applicant-childe/applicant-childe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntpProfilePageRoutingModule,
    SharedComponentsModule,
    SharedComponentsModule
  ],
  declarations: [EntpProfilePage, ApplicantsComponent, ApplicantChildeComponent]
})
export class EntpProfilePageModule {}
