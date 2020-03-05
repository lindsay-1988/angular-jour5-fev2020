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
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},
        { path : "article/:id" , component : ArticleComponent} ,
        { path : "admin/article/liste" , component : ListeComponent },
        { path : "admin" , component : DashboardComponent }, // admin après admin/article/liste
        { path : "**", component : NotFoundComponent} // not fond toujours à la fin 
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticleFictifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
