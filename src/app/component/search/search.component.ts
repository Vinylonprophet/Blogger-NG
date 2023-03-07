import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
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

  closePop() {
    this.isPopup = false;
    this.closePopup.emit(this.isPopup);
  }
}
