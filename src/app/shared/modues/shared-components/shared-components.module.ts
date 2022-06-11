import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpecialitiesComponent } from '../../components/specialities/specialities.component';

import { CollaborationComponent } from '../../components/collaboration/collaboration.component';
import { CountryComponent } from '../../components/country/country.component';
import { InfCardComponent } from '../../components/inf-card/inf-card.component';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCollFormComponent } from 'src/app/features/enterpreneur/components/add-coll-form/add-coll-form.component';
import { UpdateCollFormComponent } from 'src/app/features/enterpreneur/components/update-coll-form/update-coll-form.component';
import { RouterModule } from '@angular/router';
import { NotifComponent } from '../../components/notif/notif.component';
import { RecommendationComponent } from 'src/app/features/influencer/components/recommendation/recommendation.component';



@NgModule({
  declarations: [
    SpecialitiesComponent,
    CollaborationComponent,
    CountryComponent,
    InfCardComponent,
    HeaderComponent,
    AddCollFormComponent,
    UpdateCollFormComponent,
    NotifComponent,
    RecommendationComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    IonicRatingComponentModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SpecialitiesComponent,
    CountryComponent,
    CollaborationComponent,
    InfCardComponent,
    HeaderComponent,
    AddCollFormComponent,
    UpdateCollFormComponent,
    NotifComponent,
    RecommendationComponent
  ],
})
export class SharedComponentsModule { }
