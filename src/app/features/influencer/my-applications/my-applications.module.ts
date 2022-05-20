import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyApplicationsPageRoutingModule } from './my-applications-routing.module';

import { MyApplicationsPage } from './my-applications.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyApplicationsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MyApplicationsPage]
})
export class MyApplicationsPageModule {}
