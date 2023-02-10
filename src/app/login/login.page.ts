import { Component } from '@angular/core';
import {Member} from "../model/member";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  member: any = {} as Member;

  constructor() {}

  signIn() {

  }

  signUp() {

  }
}
