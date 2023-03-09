import { Component, Input, OnInit } from '@angular/core';
import { PopularArticle } from 'src/app/types/popular.type';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input('isShadow') isShadow: Boolean = false;
  @Input('popularArticle') popularArticle: PopularArticle = {
    id: 0,
    type: '',
    title: '',
    date: '',
    tags: [],
    author: {
      name: '',
      avatar: ''
    }
  }

  ngOnInit(): void {
  }
}
