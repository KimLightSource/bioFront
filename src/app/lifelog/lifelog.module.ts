import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {lifelogPage}  from './lifelog.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {LifelogRoutingModule} from './lifelog-routing.module';
import {LifelogModalPageModule} from "./reactive-lifelog-modal/lifelog-modal.module";
import {modalService} from "../api/modal-service";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LifelogRoutingModule,
    LifelogModalPageModule
  ],
  providers: [
  ],
  declarations: [lifelogPage]
})
export class LifelogPageModule {}
