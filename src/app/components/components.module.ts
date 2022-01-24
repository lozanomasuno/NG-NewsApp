import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreheaderComponent } from './preheader/preheader.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    NewsComponent,
    PreheaderComponent
  ],
  imports: [
    CommonModule,     
  ],
  exports : [],
})
export class ComponentsModule { }
