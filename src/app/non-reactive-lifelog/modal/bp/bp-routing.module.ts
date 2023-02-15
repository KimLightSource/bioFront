import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpPage } from './bp.page';
import {AlertModule} from "@coreui/angular";

const routes: Routes = [
  {
    path: '',
    component: BpPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class BpPageRoutingModule {}
