import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input('article') article: any = [];
  currentArticle: number = 0;
  totalPage: number = 0;
  pageArray: any = [];
  currentPage: number = 0;
  perArticle: number = 1;
  prePageArray: any = [];

  pageElement = document.getElementsByClassName('list-number');
  activePageElement = document.getElementsByClassName('active-page');

  ngOnInit(): void {
    this.currentArticle = this.article.length % this.perArticle;
    this.totalPage = Math.ceil(this.article.length / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
    this.prePageArray = JSON.parse(JSON.stringify(this.pageArray));
    this.isEllipsis();
    this.ngOnChanges(this.currentPage)
  }

  ngOnChanges(changes: any): void {
  }

  nextPage() {
    this.currentPage++;
    this.isEllipsis();
  }

  prePage() {
    this.currentPage--;
    this.isEllipsis();
  }

  toPage(event: Event) {
    this.currentPage = Number((event.target as HTMLElement).innerText) - 1;
  }

  isEllipsis() {
    this.pageArray = JSON.parse(JSON.stringify(this.prePageArray));
    if (this.currentPage === 0) {
      this.pageArray.splice(3, this.pageArray.length - 4, '...')
    } else if (this.prePageArray.length >= 7) {
      let arrayIndex = this.pageArray.indexOf(this.currentPage);
      if (arrayIndex - 2 >= 0) {
        this.pageArray.splice(1, arrayIndex - 2, '...');
      };
      arrayIndex = this.pageArray.indexOf(this.currentPage);
      if (this.pageArray.length - 2 > arrayIndex) {
        this.pageArray.splice(arrayIndex + 2, this.pageArray.length - arrayIndex - 3, '...');
      }
    }
  }
}
