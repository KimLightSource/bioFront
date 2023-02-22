import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lifelog-modal-v2',
    loadChildren: () => import('./non-reactive-lifelog/lifelog-modal-v2/lifelog-modal-v2.module').then(m => m.LifelogModalV2PageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./login/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },

  // {
  //   path: 'lifelog-modal',
  //   loadChildren: () => import('./lifelog/reactive-lifelog-modal/lifelog-modal.module').then(m => m.LifelogModalPageModule)
  // },
  // {
  //   path: 'nonReactiveLifelog',
  //   loadChildren: () => import('./non-reactive-lifelog/non-reactive-lifelog.module').then( m => m.nonReactiveLifelogPageModule)
  //
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
