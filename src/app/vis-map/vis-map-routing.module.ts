import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisMapPage } from './vis-map.page';

const routes: Routes = [
  {
    path: '',
    component: VisMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisMapPageRoutingModule {}
