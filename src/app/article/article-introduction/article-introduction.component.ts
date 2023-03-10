import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-introduction',
  templateUrl: './article-introduction.component.html',
  styleUrls: ['./article-introduction.component.scss']
})
export class ArticleIntroductionComponent implements OnInit {
  @Input('isHomePage') isHomePage: Boolean = false;
  currentArticle: number = 0;
  totalPage: number = 0;
  pageArray: any = [];
  currentPage: number = 0;
  perArticle: number = 7;
  totalArticle: number = 21

  article: any = []

  shortArticle = [
    {},
    {},
    {},
    {},
    {},
  ]

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getPopularIntroduction().subscribe(article => {
      this.article = article;
    }
    )
    this.currentArticle = this.totalArticle % this.perArticle;
    this.totalPage = Math.ceil(this.totalArticle / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
  }

  updatePage(page: number) {
    this.currentPage = page;
    console.log("mba: " + this.currentPage);
    this.articleService.getPopularIntroduction1().subscribe(article => {
      this.article = article;
    })
  }
}
