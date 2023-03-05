import { Component } from '@angular/core';

@Component({
  selector: 'app-article-classify',
  templateUrl: './article-classify.component.html',
  styleUrls: ['./article-classify.component.scss']
})
export class ArticleClassifyComponent {
  classify: any = [
    'Top Tags',
    'SCSS',
    'HTML',
    'Tailwind',
    'Vue',
    'Angular',
    'React',
    'JavaScript'
  ];

  sorting: any = [
    'DESC',
    'ASC'
  ]

  isSort: Boolean = false;
}
