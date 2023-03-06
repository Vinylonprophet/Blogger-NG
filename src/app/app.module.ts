import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './bar/nav-bar/nav-bar.component';
import { ArticleSelectComponent } from './article/article-select/article-select.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { ArticleCardComponent } from './article/article-select/article-card/article-card.component';
import { ArticleIntroductionComponent } from './article/article-introduction/article-introduction.component';
import { FooterBarComponent } from './bar/footer-bar/footer-bar.component';
import { ArticleComponent } from './article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { PageDisplayPipe } from './pipe/page/page-display.pipe';
import { ArticleClassifyComponent } from './article/article-classify/article-classify.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleSelectComponent,
    ArticleCardComponent,
    HomeIndexComponent,
    ArticleIntroductionComponent,
    FooterBarComponent,
    ArticleComponent,
    PaginatorComponent,
    PageDisplayPipe,
    ArticleClassifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeIndexComponent },
      { path: 'article', component: ArticleComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
