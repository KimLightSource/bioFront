import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Lifelog} from "../model/lifelog";

@Injectable({
  providedIn: 'root'
})
export class LifelogService {

  constructor(
    private http: HttpClient,

  ) { }

  latestLifelog(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`http://localhost:8080/lifelog`,{ observe: 'response' })
  }


  /* 로그인 */
  saveModalData(form:any, url:any): Observable<HttpResponse<any>> {
    console.log(form)
    return this.http.post<any>(`http://localhost:8080/${url}`, form, { observe: 'response' })
  }

  /* bp select */
  getAllBp() : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/lifelog/Allbp`, { observe: 'response' })
  }

  getAllBs() : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/lifelog/Allbs`, { observe: 'response' })
  }

  getAllWeight() : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/lifelog/AllWeight`, { observe: 'response' })
  }




}
