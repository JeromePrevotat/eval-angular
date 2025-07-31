import { Component, Input, OnInit } from '@angular/core';
import { DiscountPricePipe } from '../../pipes/discount-price.pipe';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-discount-item-card',
  standalone: true,
  imports: [RouterLink, DiscountPricePipe],
  templateUrl: './discount-item-card.component.html',
  styleUrl: './discount-item-card.component.css'
})
export class DiscountItemCardComponent{
  @Input() product: Product | undefined;


}
