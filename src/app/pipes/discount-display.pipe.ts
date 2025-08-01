import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'discountDisplay',
  standalone: true
})
export class DiscountDisplayPipe implements PipeTransform {

  transform(value: number, ...args: Product[]): string {
    if (args[0]) {
      return `-${(args[0].discountPercent * 100)}%`;
    }
    return `${value}`;
  }

}
