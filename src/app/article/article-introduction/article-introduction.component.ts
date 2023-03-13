import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-article-introduction',
  templateUrl: './article-introduction.component.html',
  styleUrls: ['./article-introduction.component.scss']
})
export class ArticleIntroductionComponent implements OnInit {
  @Input('isHomePage') isHomePage: Boolean = false;
  @Input('currentPart') currentPart: string = 'article';
  currentArticle: number = 0;
  totalPage: number = 0;
  pageArray: any = [];
  currentPage: number = 0;
  perArticle: number = 7;
  basicInfo: Object = {
    totalArticle: 0
  };
  totalArticle = 8;

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
    this.articleService.getBasicInfo().subscribe(basicInfo => {
      this.basicInfo = basicInfo;
    })
    this.initPageInfo();
  }

  initPageInfo() {
    this.currentPage = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.postIntroduction(this.currentPage, this.currentPart).subscribe((article: any) => {
      this.article = article;
      console.log("cancanneed", JSON.stringify(this.article[0].link))
    })
    this.currentArticle = this.totalArticle % this.perArticle;
    this.totalPage = Math.ceil(this.totalArticle / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
  }

  updatePage(page: number) {
    // document.location.href = 'http://localhost:4200/article/' + page;
    this.router.navigate([this.currentPart + '/' + page]);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.initPageInfo();
      }
    });
  }
}
