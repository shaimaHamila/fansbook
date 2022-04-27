import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantsListPage } from './applicants-list.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicantsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantsListPageRoutingModule {}
