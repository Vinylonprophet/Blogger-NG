import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  footerContent: any = []

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getFooterContent().subscribe(content => {
      this.footerContent = content;
    });
  }
}
