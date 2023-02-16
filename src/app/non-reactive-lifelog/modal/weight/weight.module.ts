import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightPageRoutingModule } from './weight-routing.module';

import { WeightPage } from './weight.page';
import {LifelogModalV2PageModule} from "../../lifelog-modal-v2/lifelog-modal-v2.module";
import {CollapseModule, GridModule} from "@coreui/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightPageRoutingModule,
    LifelogModalV2PageModule,
    GridModule,
    CollapseModule,
  ],
  declarations: [WeightPage]
})
export class WeightPageModule {}
