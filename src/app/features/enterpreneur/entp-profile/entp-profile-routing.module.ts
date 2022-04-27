import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntpProfilePage } from './entp-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EntpProfilePage
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntpProfilePageRoutingModule {}
