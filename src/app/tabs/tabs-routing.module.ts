import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {LifelogPageModule} from "../lifelog/lifelog.module";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'lifelog',
        loadChildren: () => import('../lifelog/lifelog.module').then(m => m.LifelogPageModule)
      },
      {
        path: 'nonReactiveLifelog',
        loadChildren: () => import('../non-reactive-lifelog/non-reactive-lifelog.module').then(m => m.nonReactiveLifelogPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
