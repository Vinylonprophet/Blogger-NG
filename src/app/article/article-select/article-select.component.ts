import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-select',
  templateUrl: './article-select.component.html',
  styleUrls: ['./article-select.component.scss']
})
export class ArticleSelectComponent implements OnInit {

  isShadow: Boolean = false;

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
    console.log(this.isShadow)
  }
}
