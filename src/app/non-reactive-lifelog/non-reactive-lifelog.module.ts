import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {nonReactiveLifelogPage} from './non-reactive-lifelog.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {nonReactiveLifelogPageRoutingModule} from './non-reactive-lifelog-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    nonReactiveLifelogPageRoutingModule
  ],
  declarations: [nonReactiveLifelogPage]
})
export class nonReactiveLifelogPageModule {}
