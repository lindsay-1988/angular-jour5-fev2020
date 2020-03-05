import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ArticleFictifService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

  getAllArticles()
  {
    return this.http.get(this.url);
  }

  getArticleById(id)
  {
    return this.http.get(this.url+"/"+id);
  }

  
}