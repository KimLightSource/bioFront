import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LifelogService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient,

  ) { }

  latestLifelog(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.url}/lifelog`,{ observe: 'response' })
  }


  // 모달데이터
  saveModalData(form:any, url:any): Observable<HttpResponse<any>> {
    console.log(form)
    return this.http.post<any>(`${this.url}/${url}`, form, { observe: 'response' })
  }

  /* bp select */
  getAllBp() : Observable<any> {
    return this.http.get<any>(`${this.url}/lifelog/Allbp`, { observe: 'response' })
  }

  getAllBs() : Observable<any> {
    return this.http.get<any>(`${this.url}/lifelog/Allbs`, { observe: 'response' })
  }

  getAllWeight() : Observable<any> {
    return this.http.get<any>(`${this.url}/lifelog/AllWeight`, { observe: 'response' })
  }




}
