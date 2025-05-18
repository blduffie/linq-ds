import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'isBeforeDate',
  pure: true,
})
export class IsBeforeDatePipe implements PipeTransform {
  transform(date: Date, compareDate: Date): boolean {
    return moment(date).isBefore(moment(compareDate));
  }
}
