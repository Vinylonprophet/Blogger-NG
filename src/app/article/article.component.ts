import { Component } from '@angular/core';
import { MdToHtmlService } from '../service/md-to-html.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  constructor(private MdToHtmlService: MdToHtmlService) {
  }
  article = this.MdToHtmlService.toHTML();
}
