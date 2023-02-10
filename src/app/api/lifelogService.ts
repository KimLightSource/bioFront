import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Lifelog} from "../model/lifelog";

@Injectable({
  providedIn: 'root'
})
export class LifelogService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient,

  ) { }



  /* 로그인 */
  signIn(form:any): Observable<HttpResponse<any>> {
    console.log(form)
    return this.http.post<any>(`${this.url}/login`, form, { observe: 'response' })
  }

 // getLatest(): Observable<Lifelog> {
 //    return this.http.get
 // }

}
