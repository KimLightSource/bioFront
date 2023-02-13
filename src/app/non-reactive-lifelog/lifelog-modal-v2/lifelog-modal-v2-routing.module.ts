import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifelogModalV2Page } from './lifelog-modal-v2.page';

const routes: Routes = [
  {
    path: '',
    component: LifelogModalV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifelogModalV2PageRoutingModule {}
