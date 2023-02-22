import { Injectable } from '@angular/core';
import { StorageType } from '../model/storage.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(st: StorageType, value:any) {
    localStorage.setItem(st, JSON.stringify(value));
  }

  get(st: StorageType) {
    return JSON.parse(localStorage.getItem(st) || '{}');
  }

  delete(st: StorageType) {
    localStorage.removeItem(st);
  }

  clear() {
    localStorage.clear();
  }
}
