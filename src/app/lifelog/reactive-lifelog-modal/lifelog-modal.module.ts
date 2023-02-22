import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LifelogModalPageRoutingModule} from './lifelog-modal-routing.module';

import {LifelogModalPage} from './lifelog-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifelogModalPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LifelogModalPage
  ],
  providers:[

  ],
  declarations: [LifelogModalPage]
})
export class LifelogModalPageModule {}
