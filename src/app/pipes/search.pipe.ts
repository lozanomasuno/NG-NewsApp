import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, term: any): any {
    if(term === undefined){
      return value;
    }
    return value.filter(function(item: any){
      return item.title.toLowerCase().includes(term.toLowerCase());
    })    
  }

}
