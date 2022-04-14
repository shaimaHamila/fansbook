import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntpListPage } from './entp-list.page';

const routes: Routes = [
  {
    path: '',
    component: EntpListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntpListPageRoutingModule {}
