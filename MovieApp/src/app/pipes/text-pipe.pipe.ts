import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe'
})
export class TextPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
