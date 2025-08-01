import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { BasketComponent } from "./components/basket/basket.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    BasketComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productService: ProductService = inject(ProductService);
  title = 'eval-angular';
  products$ = this.productService.getProducts;
  
  constructor() {}
}
