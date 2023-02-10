import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifelogModalPageRoutingModule } from './lifelog-modal-routing.module';

import { LifelogModalPage } from './lifelog-modal.page';
import {modalService} from "../../api/modal-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifelogModalPageRoutingModule
  ],
  exports: [
    LifelogModalPage
  ],
  providers:[

  ],
  declarations: [LifelogModalPage]
})
export class LifelogModalPageModule {}
