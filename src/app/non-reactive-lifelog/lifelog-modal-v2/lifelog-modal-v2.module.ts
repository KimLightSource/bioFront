import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LifelogModalV2PageRoutingModule} from './lifelog-modal-v2-routing.module';

import {LifelogModalV2Page} from './lifelog-modal-v2.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LifelogModalV2PageRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    LifelogModalV2Page
  ],
  declarations: [LifelogModalV2Page]
})
export class LifelogModalV2PageModule {}
