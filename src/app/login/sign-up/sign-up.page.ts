import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,

  ) {
    this.form = this.builder.group(
      {
        loginId : this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password :  this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  }
  )

  }

  ngOnInit() {
  }

}
