import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifelogModalPage } from './lifelog-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LifelogModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifelogModalPageRoutingModule {}
