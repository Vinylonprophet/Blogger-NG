import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  currentPart: string = 'article';

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.currentPart = String(this.route.routeConfig?.path?.substring(0, this.route.routeConfig?.path.indexOf('/')));
  }

}
