import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S1UsertypePage } from './s1-usertype.page';

const routes: Routes = [
  {
    path: '',
    component: S1UsertypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S1UsertypePageRoutingModule {}
