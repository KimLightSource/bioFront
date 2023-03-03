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
    private router : Router,
    private builder: FormBuilder,
    private memberService: MemberService,
    private storage: StorageService,

  ) {
    this.form = this.builder.group(
      {
        uid : this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password :  this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  }
    )
  }

  get uid(): FormControl {
    return this.form.get('uid') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }



  // 이메일과 비밀번호를 이용한 로그인
  loginWithEmailAndPassword(): void {
    this.memberService.loginWithEmailAndPassword(
      this.uid.value,
      this.password.value
    )
      .then((res) => {
        // 로그인 성공 시 HomeComponent로 이동
        // const token = user.headers.get('authorization');
        // this.storage.set(StorageType.Token, token);
        // const token = res.user?.getIdToken();
        // console.log(token)
        // this.storage.set(StorageType.Token, token);
        this.router.navigateByUrl('/tabs/nonReactiveLifelog');
      })
      .catch(err => {
        // 로그인 실패 시
        console.error(err);
        alert(err.message);
      });
  }

  //JWT를 이용한 로그인
  login() {
    this.memberService.login(
      this.form.value
    )
      .subscribe({
        next: res => {
          console.log(res)
          const token = res.headers.get('authorization');
          this.storage.set(StorageType.Token, token);
          this.router.navigateByUrl('/tabs/nonReactiveLifelog');
        },
        error : err => {
          this.form.reset();
        }
      });
  }


  signUp() {

  }
}
