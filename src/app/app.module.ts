import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './bar/nav-bar/nav-bar.component';
import { ArticleSelectComponent } from './article/article-select/article-select.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { ArticleCardComponent } from './article/article-select/article-card/article-card.component';
import { ArticleIntroductionComponent } from './article/article-introduction/article-introduction.component';
import { FooterBarComponent } from './bar/footer-bar/footer-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleSelectComponent,
    ArticleCardComponent,
    HomeIndexComponent,
    ArticleIntroductionComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeIndexComponent },
      { path: 'article-select', component: ArticleSelectComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
