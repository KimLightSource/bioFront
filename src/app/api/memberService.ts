import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient,
              // private storage: StorageService
  ) { }



  // /* 로그인 */
  // signIn(form:any): Observable<HttpResponse<any>> {
  //   console.log(form)
  //   return this.http.post<any>(`${this.url}/login`, form, { observe: 'response' })
  // }
  //
  // /* 회원 가입 */
  // signUp(): Observable<HttpResponse>{
  //     console.log()
  //   return this.http.put<StatusResponse>(`${this.url}/admin/transfer`, requestVo)
  //
  // }

}
