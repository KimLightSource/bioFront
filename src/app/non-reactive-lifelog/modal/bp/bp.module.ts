import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpPageRoutingModule } from './bp-routing.module';

import { BpPage } from './bp.page';
import {LifelogService} from "../../../api/lifelogService";
import {LifelogModalV2PageModule} from "../../lifelog-modal-v2/lifelog-modal-v2.module";
import {AlertModule, CardModule, CollapseModule, GridModule} from "@coreui/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpPageRoutingModule,
    IonicModule,
    LifelogModalV2PageModule,
    GridModule,
    CollapseModule,
    CardModule,

  ],
  providers: [
  ],
  declarations: [BpPage]
})
export class BpPageModule {}
