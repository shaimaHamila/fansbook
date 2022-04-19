import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S3WorkInfoPageRoutingModule } from './s3-work-info-routing.module';

import { S3WorkInfoPage } from './s3-work-info.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S3WorkInfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [S3WorkInfoPage]
})
export class S3WorkInfoPageModule {}
