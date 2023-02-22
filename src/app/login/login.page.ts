import {Component} from '@angular/core';
import {Member} from "../model/member";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../services/member.service";
import {StorageService} from "../services/storage.service";
import {StorageType} from "../model/storage.type";

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
    private memberService: MemberService,
    private storage: StorageService,

  ) {
    this.form = this.builder.group(
      {
        loginId : this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password :  this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  }
    )
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  // login() {
  //   this.memberService.login(this.form.value)
  //     .subscribe({
  //       next: res => {
  //         const token = res.headers.get('authorization');
  //         this.storage.set(StorageType.Token, token);
  //         this.rout.navigateByUrl('/tabs/nonReactiveLifelog');
  //       },
  //       error : err => {
  //         this.form.reset();
  //       }
  //     });
  // }

  // 이메일과 비밀번호를 이용한 로그인
  loginWithEmailAndPassword(): void {
    this.memberService.loginWithEmailAndPassword(
      this.email.value,
      this.password.value
    )
      .then((user) => {
        // 로그인 성공 시 HomeComponent로 이동
        this.rout.navigateByUrl('/tabs/nonReactiveLifelog');
      })
      .catch(err => {
        // 로그인 실패 시
        console.error(err);
        alert(err.message);
      });
  }


  signUp() {

  }
}
