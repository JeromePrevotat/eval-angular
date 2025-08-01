import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { DiscountPricePipe } from "../../pipes/discount-price.pipe";
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [DiscountPricePipe, CurrencyPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  private basketService: BasketService = inject(BasketService);
  private productService: ProductService = inject(ProductService);
  basketContent$ = this.basketService.getBasketContent;
  discountedPrice: number[] = this.basketContent$.map(item => this.productService.getDiscountedPrice(item));
  totalPrice$: number = this.getTotalPrice();

  getTotalPrice(): number {
    let total = 0;
    for (let price of this.discountedPrice) {
      total += price;
    }
    return total;
  }
}
