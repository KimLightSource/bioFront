import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';

import {environment} from '../environments/environment';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
  ]
})
export class FirebaseModule {
}
