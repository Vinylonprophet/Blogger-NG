import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-classify',
  templateUrl: './article-classify.component.html',
  styleUrls: ['./article-classify.component.scss']
})
export class ArticleClassifyComponent implements OnInit, AfterViewInit {
  @ViewChild("selectTags") selectTags!: ElementRef<HTMLInputElement>;
  @ViewChild("selectSort") selectSort!: ElementRef;

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

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    fromEvent(this.selectTags?.nativeElement, 'change').subscribe((select: any) => {
      console.log("cancansmx: ", select.target.value);
    });

    fromEvent(this.selectSort?.nativeElement, 'change').subscribe((select: any) => {
      this.isSort = !this.isSort;
      console.log("cancansmx: ", select.target.value);
    });
  }
}
