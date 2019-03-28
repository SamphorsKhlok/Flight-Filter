import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const set = new Set(args);
    return value ? value.filter(f => {
      if(set.size){
        return set.has(f['flight']['flightSegments'][0]['airlineName']);
      } else {
        return true;
      }
    }) : null;
  }

}
