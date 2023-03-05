import { Injectable } from '@angular/core';
import * as MarkdownIt from 'markdown-it'

@Injectable({
  providedIn: 'root'
})
export class MdToHtmlService {

  constructor() { }

  public toHTML() {

    const toHTML = new MarkdownIt();
    const HTML = toHTML.render(``);

    // console.log("md: " + md);
    console.log("HTML: " + HTML);
    return HTML;
  }
}
