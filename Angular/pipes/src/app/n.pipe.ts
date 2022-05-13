import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedLength',
})
export class NPipe implements PipeTransform {
  transform(value: string, limited: boolean) {
    if (limited) {
      return value.slice(0, 20) + '...';
    } else {
      return value;
    }
  }
}
