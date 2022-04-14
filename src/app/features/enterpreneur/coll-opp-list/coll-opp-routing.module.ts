import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollOppPage } from './coll-opp.page';

const routes: Routes = [
  {
    path: '',
    component: CollOppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollOppPageRoutingModule {}
