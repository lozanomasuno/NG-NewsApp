import { Component, OnInit } from '@angular/core';
import { ApinewsService } from 'src/app/services/apinews.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public totalArticles: number = 0;
  public addAuthor: string = "";
  public authors: string[]= [];
  public totalAuthors : number = 0;
  public loadAuthors: any[] = [];
  constructor(private apiNewService : ApinewsService) { }

  ngOnInit(): void {
    this.loadNews();
    this.loadnewsAutor()
  }

  public loadNews(){
    this.apiNewService.getTotalResults().subscribe((data:any) =>{
      return data.articles.length;
    })
  }

  public loadnewsAutor(){
    this.apiNewService.getTotalResults().subscribe((data:any) =>{
      this.totalArticles =  data.articles.length;     
        for( var i = 0; i < this.totalArticles; i++){
          this.addAuthor = data.articles[i].author
          if(this.addAuthor){
            this.authors.push(this.addAuthor);       
          }                    
        }  
        return this.totalAuthors  = this.authors.length
    })
  }
}
