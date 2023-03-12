import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  articleId: number = 0;
  article = {
    id: 0,
    img: '',
    tags: [
      '',
      '',
      ''
    ],
    title: '',
    abstract: '',
    author: {
      name: '',
      date: '',
      avatar: ''
    },
    markdown: ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("needddd: ", this.articleId);
    this.articleService.getArticleDetail(this.articleId).subscribe((article: any) => {
      this.article = article;
    })
  }
}
