import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: String): any {
    return value.charAt(0).toUpperCase() + value.substr(1, value.length - 1);
  }

}
