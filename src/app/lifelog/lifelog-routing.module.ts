import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {lifelogPage} from './lifelog.page';

const routes: Routes = [
  {
    path: '',
    component: lifelogPage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifelogRoutingModule {}
