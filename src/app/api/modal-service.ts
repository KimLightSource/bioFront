import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class modalService {


  static isModalOpen: boolean = false;




  constructor(private http: HttpClient,
              // private storage: StorageService
  ) { }


}
