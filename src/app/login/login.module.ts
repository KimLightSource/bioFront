import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPage} from './login.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {LoginPageRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LoginPageRoutingModule,
    ReactiveFormsModule, //반응형 폼 사용
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
