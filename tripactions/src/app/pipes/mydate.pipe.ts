import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const d = new Date(value);
    let am = 'am';
    let hour: any = d.getHours();
    if(hour > 12){
      am = 'pm';
      hour = hour - 12;
    }
    if(hour < 10){
      hour = '0' + hour;
    }
    let min: any = d.getMinutes();
    if(min < 10) {
      min = '0' + min;
    }
    const month = d.getMonth();
    const day = d.getDate();
    return hour + ':' + min + ' ' + am + ' ' + this.getMonthString(month) + ' ' + day;
  }
  getMonthString(n){
    const map = new Map();
    map.set(1, 'Jan');
    map.set(2, 'Feb');
    map.set(3, 'Mar');
    map.set(4, 'Apr');
    map.set(5, 'May');
    map.set(6, 'Jun');
    map.set(7, 'Jul');
    map.set(8, 'Aug');
    map.set(9, 'Sep');
    map.set(10, 'Oct');
    map.set(11, 'Nov');
    map.set(12, 'Dec');
    return map.get(n);
  }

}
