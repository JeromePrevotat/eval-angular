import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'discountPrice',
  standalone: true
})
export class DiscountPricePipe implements PipeTransform {

  transform(value: number, ...args: Product[]): number {
    return args[0].fullPrice - (args[0].fullPrice * args[0].discountPercent);
  }

}
