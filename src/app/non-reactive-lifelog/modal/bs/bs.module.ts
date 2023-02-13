import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BsPageRoutingModule } from './bs-routing.module';

import { BsPage } from './bs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsPageRoutingModule
  ],
  declarations: [BsPage]
})
export class BsPageModule {}
