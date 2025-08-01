import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { BasketComponent } from "./components/basket/basket.component";
import { BasketService } from './services/basket.service';
import { SsrService } from './services/ssr.service';

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
  basketService: BasketService = inject(BasketService);
  ssrService: SsrService = inject(SsrService);
  title = 'eval-angular';
  products$ = this.productService.getProducts;
  basketContent$ = this.basketService.basketContent$;
  
  constructor() {
    if(!this.ssrService.isServerSide()) {
      const basketContentFromStorage = localStorage.getItem('basket');
      if (basketContentFromStorage) {
        const basketContent = JSON.parse(basketContentFromStorage);
        for (const product of basketContent) {
          this.basketService.addToBasket(product);
        }
      }
    }
  }
}
