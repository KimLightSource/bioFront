import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {lifelogPage} from './lifelog.page';

const routes: Routes = [
  {
    path: '',
    component: lifelogPage,
    children: [{
      path: 'bp',
      loadChildren: () => import('./lifielogDetail/bp/bp.module').then(m => m.BpPageModule)
    },
      {
        path: 'bs',
        loadChildren: () => import('./lifielogDetail/bs/bs.module').then(m => m.BsPageModule)
      },
      {
        path: 'weight',
        loadChildren: () => import('./lifielogDetail/weight/weight.module').then(m => m.WeightPageModule)
      },
      {
        path: 'cal',
        loadChildren: () => import('./lifielogDetail/cal/cal.module').then(m => m.CalPageModule)
      },
      {
        path: 'step',
        loadChildren: () => import('./lifielogDetail/step/step.module').then(m => m.StepPageModule)
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifelogRoutingModule {}
