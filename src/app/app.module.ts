import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let appRoutes:Routes =[
  {path:'', component: NewsComponent},
  {path:'articles', component: ArticlesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    SearchbarComponent,
    ArticlesComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
