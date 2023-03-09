import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/service/bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navContent: any = [];
  isPopup: boolean = false;

  constructor(private BarService: BarService) { }

  onChange(close: boolean) {
    this.isPopup = close;
  }

  ngOnInit(): void {
    this.BarService.getNavContent().subscribe(content => {
      this.navContent = content;
    })
  }
}
