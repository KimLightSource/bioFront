import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LifelogModalV2Page} from './lifelog-modal-v2.page';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: LifelogModalV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,

  ],
  exports: [RouterModule],
})
export class LifelogModalV2PageRoutingModule {}
