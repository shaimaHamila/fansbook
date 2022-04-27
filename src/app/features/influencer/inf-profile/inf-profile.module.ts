import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicRatingComponentModule} from 'ionic-rating-component';

import { IonicModule } from '@ionic/angular';

import { InfProfilePageRoutingModule } from './inf-profile-routing.module';
import { InfProfilePage } from './inf-profile.page';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';
import { EditBioComponent } from '../components/edit-profile-modals/edit-bio/edit-bio.component';
import { EditBugetComponent } from '../components/edit-profile-modals/edit-buget/edit-buget.component';
import { EditMediaLinksComponent } from '../components/edit-profile-modals/edit-media-links/edit-media-links.component';
import { EditSpecialitiesComponent } from '../components/edit-profile-modals/edit-specialities/edit-specialities.component';
import { ExperienceComponent } from '../components/edit-profile-modals/experience/experience.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfProfilePageRoutingModule,
    IonicRatingComponentModule,
    SharedComponentsModule

  ],
    declarations: [
      InfProfilePage,
      InfoModalComponent,
      EditBioComponent,
      EditBugetComponent,
      EditMediaLinksComponent,
      EditSpecialitiesComponent,
      ExperienceComponent
    ]
})
export class InfProfilePageModule {}
