import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getPopularArticle() {
    return this.http.get('http://localhost:7878/popularArticle');
  }

  getIntroduction() {
    return this.http.get('http://localhost:7878/articleIntroduction');
  }

  getIntroduction1() {
    return this.http.get('http://localhost:7878/articleIntroduction1');
  }

  getArticleDetail(id: number) {
    return this.http.get('http://localhost:7878/articleDetail/' + id);
  }
}
