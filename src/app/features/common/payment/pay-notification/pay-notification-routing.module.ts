import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayNotificationPage } from './pay-notification.page';

const routes: Routes = [
  {
    path: '',
    component: PayNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayNotificationPageRoutingModule {}
