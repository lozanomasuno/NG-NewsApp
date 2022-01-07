import { Component, OnInit } from '@angular/core';
import { ApinewsService } from 'src/app/services/apinews.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
public keyword: any;
public urlImage: any;

  constructor(private apinewsService : ApinewsService) { }

  ngOnInit(): void {
  }

  search(){
    this.apinewsService.getApiNews(this.keyword).subscribe((data: any) =>{
     this.keyword = data.articles[0].urlToImage;
      console.log(this.urlImage);
    });
  }
}
