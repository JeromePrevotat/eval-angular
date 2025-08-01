import { Component, Input, OnInit } from '@angular/core';
import { DiscountPricePipe } from '../../pipes/discount-price.pipe';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { DiscountDisplayPipe } from "../../pipes/discount-display.pipe";
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-discount-item-card',
  standalone: true,
  imports: [RouterLink, DiscountPricePipe, DiscountDisplayPipe, CurrencyPipe],
  templateUrl: './discount-item-card.component.html',
  styleUrl: './discount-item-card.component.css'
})
export class DiscountItemCardComponent{
  @Input() product: Product | undefined;


}
