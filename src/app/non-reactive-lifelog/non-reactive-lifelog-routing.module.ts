import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {nonReactiveLifelogPage} from './non-reactive-lifelog.page';

const routes: Routes = [
  {
    path: '',
    component: nonReactiveLifelogPage
  },
  {
    path: 'bp',
    loadChildren: () => import('../non-reactive-lifelog/modal/bp/bp.module').then(m => m.BpPageModule)
  },
  {
    path: 'bs',
    loadChildren: () => import('../non-reactive-lifelog/modal/bs/bs.module').then(m => m.BsPageModule)
  },
  {
    path: 'weight',
    loadChildren: () => import('../non-reactive-lifelog/modal/weight/weight.module').then(m => m.WeightPageModule)
  },
  {
    path: 'cal',
    loadChildren: () => import('../non-reactive-lifelog/modal/cal/cal.module').then(m => m.CalPageModule)
  },
  {
    path: 'step',
    loadChildren: () => import('../non-reactive-lifelog/modal/step/step.module').then(m => m.StepPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nonReactiveLifelogPageRoutingModule {
}
