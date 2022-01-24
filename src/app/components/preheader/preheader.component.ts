import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preheader',
  templateUrl: './preheader.component.html',
  styleUrls: ['./preheader.component.scss']
})
export class PreheaderComponent implements OnInit {
  //Hijo
 @Input() public allnewsArticle: number = 0;
 @Input() public AllNewsAuthors: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
