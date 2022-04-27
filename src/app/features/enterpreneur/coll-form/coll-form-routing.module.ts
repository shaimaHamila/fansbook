import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollFormPage } from './coll-form.page';

const routes: Routes = [
  {
    path: '',
    component: CollFormPage
  },

  {
    path: 'applicants-list',
    loadChildren: () => import('./applicants-list/applicants-list.module').then( m => m.ApplicantsListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollFormPageRoutingModule {}
