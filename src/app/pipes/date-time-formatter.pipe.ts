import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormatter'
})
export class DateTimeFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    const date1 = new Date();
    const day1 = date1.getDate();
    const month1 = date1.getMonth();
    const year1 = date1.getFullYear();
    const date2 = new Date(value);
    const day2 = date2.getDate();
    const month2 = date2.getMonth();
    const year2 = date2.getFullYear();
    let dayMapping = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    if( month1 === month2 && year1 === year2 ){
      if( day1 === day2 && month1 === month1 && year1 === year2 ){
        value = this.formatAMPM(date2);
      } else if (day1 - day2 < 7) {        
        value = dayMapping[date2.getDay()];
      } else {
        value = (month2+1) + '/' + day2 + '/' + year2;
      }
    }else {
      value = (month2+1) + '/' + day2 + '/' + year2;
    }
    return value;
  }
  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
  
}
