import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BsPageRoutingModule } from './bs-routing.module';

import { BsPage } from './bs.page';
import {LifelogModalV2PageModule} from "../../lifelog-modal-v2/lifelog-modal-v2.module";
import {CollapseModule, GridModule} from "@coreui/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsPageRoutingModule,
    IonicModule,
    LifelogModalV2PageModule,
    GridModule,
    CollapseModule,
  ],
  declarations: [BsPage]
})
export class BsPageModule {}
