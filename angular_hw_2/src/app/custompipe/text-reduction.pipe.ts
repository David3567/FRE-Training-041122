import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReduction'
})
export class TextReductionPipe implements PipeTransform {

  transform(value: string, seeMore: boolean): unknown {
    if (!seeMore) {
      return value.length > 300 ? value.slice(0, 300) + ' ...See more': value;
    } else {
      return value
    }
  }

}
