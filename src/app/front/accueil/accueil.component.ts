import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles ;
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) {
   }

  ngOnInit(): void {

    this.http.get(this.url)
      .subscribe( (response : Response) => {
        this.articles = response;
        console.log(this.articles)
      })
  }

}
