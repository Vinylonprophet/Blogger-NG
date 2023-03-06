import { Component } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
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
}
