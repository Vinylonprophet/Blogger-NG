import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleIntroduction } from 'src/app/types/article.type';

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

  article: any[] = []

  shortArticle = [
    {},
    {},
    {},
    {},
    {},
  ]

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.currentPage = Number(this.route.snapshot.paramMap.get('id'));
    console.log("this.currentPage", this.currentPage);
    this.articleService.postIntroduction(this.currentPage).subscribe((article: any) => {
      this.article = article;
    })
    this.currentArticle = this.totalArticle % this.perArticle;
    this.totalPage = Math.ceil(this.totalArticle / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
  }

  updatePage(page: number) {
    document.location.href = 'http://localhost:4200/article/' + page;
    // this.router.navigate(['article/' + this.currentPage]);
  }
}
