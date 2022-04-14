import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpecialitiesComponent } from '../../components/specialities/specialities.component';

import { CollaborationComponent } from '../../components/collaboration/collaboration.component';
import { CountryComponent } from '../../components/country/country.component';
import { InfCardComponent } from '../../components/inf-card/inf-card.component';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { HeaderComponent } from '../../components/header/header.component';



@NgModule({
  declarations: [ SpecialitiesComponent, CollaborationComponent, CountryComponent, InfCardComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    IonicRatingComponentModule
  ],
  exports: [SpecialitiesComponent,CountryComponent, CollaborationComponent, InfCardComponent, HeaderComponent],
})
export class SharedComponentsModule { }
