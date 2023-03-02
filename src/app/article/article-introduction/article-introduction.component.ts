import { Component, Input, OnInit } from '@angular/core';

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
  perArticle: number = 1;

  article = [
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    },
    {
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
        name: 'Vinylon Prophet',
        date: 'on Feb 10, 2023'
      }
    }
  ]

  shortArticle = [
    {},
    {},
    {},
    {},
    {},
  ]

  ngOnInit(): void {
    this.currentArticle = this.article.length % this.perArticle;
    this.totalPage = Math.ceil(this.article.length / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
  }

  updatePage(page: number) {
    this.currentPage = page;
  }
}
