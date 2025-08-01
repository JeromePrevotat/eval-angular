import { Component, inject, Input, OnInit } from '@angular/core';
import { DiscountPricePipe } from '../../pipes/discount-price.pipe';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { DiscountDisplayPipe } from "../../pipes/discount-display.pipe";
import { CurrencyPipe } from '@angular/common';
import { IconsPipe } from "../../pipes/icons.pipe";
import { BasketService } from '../../services/basket.service';


@Component({
  selector: 'app-discount-item-card',
  standalone: true,
  imports: [RouterLink, DiscountPricePipe, DiscountDisplayPipe, CurrencyPipe, IconsPipe],
  templateUrl: './discount-item-card.component.html',
  styleUrl: './discount-item-card.component.css'
})
export class DiscountItemCardComponent{
  basketService = inject(BasketService);
  @Input() product: Product | undefined;

  addToBasket(product: Product): void {
    if (product) {
      this.basketService.addToBasket(product);
      console.log('ADD: ', product);
    } else {
      console.error('ERROR');
    }
    this.basketService.getBasketContent().forEach(item => {
      console.log('Basket Item: ', item);
    });
  }
}
