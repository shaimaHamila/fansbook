import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  },
  {
    path: 'pay-with-card',
    loadChildren: () => import('./pay-with-card/pay-with-card.module').then( m => m.PayWithCardPageModule)
  },
  {
    path: 'pay-notification',
    loadChildren: () => import('./pay-notification/pay-notification.module').then( m => m.PayNotificationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
