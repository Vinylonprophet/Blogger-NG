import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { debounceTime, fromEvent, pluck } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnChanges {
  @ViewChild("search") search!: ElementRef<HTMLInputElement>;

  @Input('isPopup') isPopup: boolean = false;
  @Output() closePopup = new EventEmitter();

  filterOption: any = [
    {
      classify: 'Post Type',
      options: [
        'Post',
        'Page',
        'Chapter'
      ]
    },
    {
      classify: 'Post Type',
      options: [
        'Post',
        'Page',
        'Chapter'
      ]
    },
    {
      classify: 'Post Type',
      options: [
        'Post',
        'Page',
        'Chapter'
      ]
    },
    {
      classify: 'Post Type',
      options: [
        'Post',
        'Page',
        'Chapter'
      ]
    },
    {
      classify: 'Post Type',
      options: [
        'Post',
        'Page',
        'Chapter'
      ]
    },
    {
      classify: 'Categories',
      options: [
        'Article',
        'Link',
        'Recommend'
      ]
    }
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isPopup === true) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngAfterViewInit(): void {
    const qweqweqwe = document.getElementsByName('body');
    console.log("body: " + qweqweqwe)

    console.log("Vinylon: " + this.search?.nativeElement);
    const search = document.getElementById('search');

    fromEvent(this.search?.nativeElement, 'input').pipe(
      debounceTime(500)
    ).subscribe(res => {
      console.log(res);
    });
  }

  closePop() {
    this.isPopup = false;
    document.body.style.overflow = 'auto';
    this.closePopup.emit(this.isPopup);
  }
}
