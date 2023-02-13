import { Component } from '@angular/core';
import {Member} from "../model/member";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  member: any = {} as Member;
  private message: any;
  styleArray = {'wrong_id': false, 'wrong_pwd': false};
  form: FormGroup;

  constructor(
    private rout : Router,
    private builder: FormBuilder,
  ) {
    this.form = this.builder.group(
      {
        id : this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password :  this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  }
    )
  }

  signIn() {

  }

  signUp() {

  }
}
