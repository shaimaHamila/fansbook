import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfListPage } from './inf-list.page';

const routes: Routes = [
  {
    path: '',
    component: InfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfListPageRoutingModule {}
