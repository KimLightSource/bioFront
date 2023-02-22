import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
              // private storage: StorageService
    private afAuth: AngularFireAuth
  ) { }

  // 이메일과 비밀번호를 이용한 사용자 생성
  signUpWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // 이메일과 비밀번호를 이용한 로그인
  loginWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // 구글을 이용한 로그인
  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'kr';   // 언어를 한국어로
    provider.setCustomParameters({
      login_hint: 'user@example.com',
      // 구글 로그인시 항상 계정을 선택하도록 추가하지 않으면 대표 계정 혹은 마지막으로 로그인한 계정으로 자동 로그인됨
      prompt: 'select_account'
    });
    return this.afAuth.signInWithPopup(provider);
  }

}
