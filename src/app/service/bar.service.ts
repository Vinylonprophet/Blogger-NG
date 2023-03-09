import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) { }

  getNavContent() {
    return this.http.get('http://localhost:7878/navContent')
  }

  getFooterContent() {
    return this.http.get('http://localhost:7878/footerContent');
  }
}

