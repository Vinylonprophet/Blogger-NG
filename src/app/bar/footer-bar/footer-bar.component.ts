import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent {
  footerContent = [
    {
      classification: 'Book',
      labels: ['你不知道的JavaScript', 'JavaScript高级语言设计', '从优秀到卓越']
    },
    {
      classification: 'Contact',
      labels: ['QQ', 'WX', 'E-mail', 'Twitter']
    },
    {
      classification: 'Game',
      labels: ['游戏王', '坎特伯雷公主与骑士唤醒冠军之剑的奇幻冒险']
    }
  ]
}
