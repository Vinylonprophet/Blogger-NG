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
    img: 'https://css-tricks.com/wp-content/uploads/2023/02/gradient-shadows.png',
    tags: [
      'box-shadow',
      'gradients',
      'shadow'
    ],
    title: 'Different Ways to Get CSS Gradient Shadows',
    abstract: 'It\'s a question I hear asked quite often: Is it possible to create shadows from gradients instead of solid colors? There is no specific CSS property that does this (believe me, I\'ve looked) and any blog post you find about …',
    author: {
      name: 'Vinylon',
      date: 'on Feb 10, 2023',
      avatar: 'assets/icons/avatar.jpg'
    }
  }
  markdown = 'assets/md/You-dont-know-js.md'

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    console.log("can can need: ", Number(this.route.snapshot.paramMap.get('id')))
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("needddd: ", this.articleId);
    this.articleService.getArticleDetail(this.articleId).subscribe((article: any) => {
      this.article = article;
    })
  }
}
