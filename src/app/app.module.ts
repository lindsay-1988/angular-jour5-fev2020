import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';

import { ArticleFictifService } from "./service/article-fictif.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},
        { path : "article/:id" , component : ArticleComponent} ,
        { path : "**", component : NotFoundComponent} // not fond toujours à la fin 
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticleFictifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
