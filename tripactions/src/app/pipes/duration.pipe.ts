import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let h = Math.floor(value / 60);
    let m = value % 60;
    return value ? (h + ' h ' + m) : null;
  }

}
