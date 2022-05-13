import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class MyPipePipe implements PipeTransform {
  transform(value: string | undefined, unit: string) {
    if (value && !isNaN(+value)) {
      if (unit === 'C') {
        const temperature = (+value - 32) / 1.8;
        console.log(typeof temperature);
        return temperature.toFixed(2);
      } else if (unit === 'F') {
        const temperature = +value * 1.8 + 32;
        return temperature.toFixed(2);
      }
    }
    return;
  }
}
