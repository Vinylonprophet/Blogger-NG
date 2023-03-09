import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  getFooterContent() {
    return this.http.get('http://localhost:7878/footerContent');
  }
}
