import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BsPage} from './bs.page';

const routes: Routes = [
  {
    path: '',
    component: BsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BsPageRoutingModule {}
