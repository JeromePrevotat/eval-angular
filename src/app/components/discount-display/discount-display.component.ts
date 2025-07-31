import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { DiscountItemCardComponent } from '../discount-item-card/discount-item-card.component';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-discount-display',
  standalone: true,
  imports: [AsyncPipe, DiscountItemCardComponent],
  templateUrl: './discount-display.component.html',
  styleUrl: './discount-display.component.css'
})
export class DiscountDisplayComponent {
  private productService = inject(ProductService);
  discountedProducts$: Observable<Product[]> = this.productService.getDiscountedProducts();

  // DEBUG
  // ngOnInit() {
  //     this.discountedProducts$.subscribe(products => {
  //     console.log('Discounted Products:', products);
  //   });
  // }
}
