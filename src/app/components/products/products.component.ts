import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DiscountItemCardComponent } from "../discount-item-card/discount-item-card.component";
import { Product } from '../../models/product';
import { FilterFormComponent } from "../../forms/filter-form/filter-form.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DiscountItemCardComponent, FilterFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService: ProductService = inject(ProductService);
  products: Product[] = [];

  constructor() {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
    console.log('Produits reçus :', this.products); // Ajoute ce log
  }
}
