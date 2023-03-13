import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getBasicInfo() {
    return this.http.get('http://localhost:7878/basicInfo');
  }

  getPopularArticle() {
    return this.http.get('http://localhost:7878/popularArticle');
  }

  getIntroduction() {
    return this.http.get('http://localhost:7878/articleIntroduction');
  }

  postIntroduction(pageId: number, part: string) {
    console.log("-- Vinylon -- 进http --");
    return this.http.post('http://localhost:7878/articleIntroduction/', { "pageId": pageId, "part": part });
  }

  getIntroduction1() {
    return this.http.get('http://localhost:7878/articleIntroduction1');
  }

  getArticleDetail(id: number) {
    return this.http.get('http://localhost:7878/articleDetail/' + id);
  }
}
