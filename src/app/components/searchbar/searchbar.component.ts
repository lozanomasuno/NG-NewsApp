import { Component, OnInit } from '@angular/core';
import { ApinewsService } from 'src/app/services/apinews.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
public name: any;
public urlImage: any;
  constructor(private apinewsService : ApinewsService) { }

  ngOnInit(): void {
  }

  search(){
    this.apinewsService.getApiNews().subscribe((data: any) =>{
     this.urlImage = data.articles[0].urlToImage;
      console.log(this.urlImage);
    });
  }
}
