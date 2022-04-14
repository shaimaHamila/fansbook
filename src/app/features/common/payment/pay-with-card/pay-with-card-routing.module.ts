import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayWithCardPage } from './pay-with-card.page';

const routes: Routes = [
  {
    path: '',
    component: PayWithCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayWithCardPageRoutingModule {}
