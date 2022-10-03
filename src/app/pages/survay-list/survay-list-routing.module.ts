import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurvayListPage } from './survay-list.page';

const routes: Routes = [
  {
    path: '',
    component: SurvayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurvayListPageRoutingModule {}
