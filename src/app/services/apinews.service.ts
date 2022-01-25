import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApinewsService {
  private url: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc53dcae0cc9441aa1432df9b07b633f'
  constructor(private http: HttpClient ) { }

  getApiNews(keyword: string){     
    return this.http.get(`${this.url}/${keyword}`)
  }
  
  getTotalResults(){
    return this.http.get(`${this.url}`)
  }


}
