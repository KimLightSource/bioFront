import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
import {AlertController} from "@ionic/angular";
import {StorageType} from "../../model/storage.type";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form: FormGroup;

  get uid(): FormControl {
    return this.form.get('uid') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private alertController: AlertController,
  ) {
    this.form = this.builder.group(
      {
        uid: this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        email: this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        username: this.builder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password: this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
      }
    )
  }

  ngOnInit() {
  }

  signUpWithEmailAndPassword(): void {
    this.memberService.signUpWithEmailAndPassword(
      this.uid.value,
      this.password.value
    )
      .then(() => {

        this.router.navigate(['tabs/login']);
      })
      .catch(err => {
        console.error(err);
        this.presentAlert('회원가입이 실패하였습니다').then(r => {
            alert(err.message);
          }
        )

      });
  }

  signUp() {
    this.memberService.signUp(this.form.value)
      .subscribe(
        {
          next: res => {
            console.log(res)
            this.presentAlert('회원가입이 완료되었습니다')
            this.router.navigateByUrl('/tabs/login');
          },
          error: err => {
            this.form.reset();
            this.presentAlert('회원가입이 실패하였습니다').then(r => {
                alert(err.message);
              }
            )
          }
        })


  }


  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['OK'],
    });
    await alert.present();
  }


}
