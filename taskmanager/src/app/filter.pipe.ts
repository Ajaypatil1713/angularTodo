import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return value; 
    }

    searchTerm = searchTerm.toLowerCase();

    return value.filter(function(item: any) {
      return item.status.toLowerCase().indexOf(searchTerm) > -1;
    });
  }

}
