import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2GeneralInfoPage } from './s2-general-info.page';

const routes: Routes = [
  {
    path: '',
    component: S2GeneralInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2GeneralInfoPageRoutingModule {}
