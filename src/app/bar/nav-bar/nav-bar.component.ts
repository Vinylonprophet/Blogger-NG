import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isPopup: boolean = false;

  onChange(close: boolean) {
    this.isPopup = close;
  }
}
