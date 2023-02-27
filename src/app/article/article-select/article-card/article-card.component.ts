import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input('isShadow') isShadow: Boolean = false;

  list = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ]

  ngOnInit(): void {
    console.log("isShadow: " + this.isShadow);
  }
}
