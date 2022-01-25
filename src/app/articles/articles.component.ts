import { Component, OnInit } from '@angular/core';
import { ApinewsService } from '../services/apinews.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public alldata: any[] = []
  public keyword: string = "";

  constructor(private apinewsService : ApinewsService) { }

  ngOnInit(): void {
    this.loadAllNews();
  }

  loadAllNews(){   
      this.apinewsService. getTotalResults().subscribe((data: any) =>{   
          console.log(data.articles);       
        return this.alldata = data.articles;        
      });  
  }
 }
