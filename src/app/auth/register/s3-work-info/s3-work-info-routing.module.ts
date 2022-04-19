import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S3WorkInfoPage } from './s3-work-info.page';

const routes: Routes = [
  {
    path: '',
    component: S3WorkInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S3WorkInfoPageRoutingModule {}
