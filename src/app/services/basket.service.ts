import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketContentSubject = new BehaviorSubject<Product[]>([]);
  public basketContent$ = this.basketContentSubject.asObservable();

  constructor() {}

  addToBasket(product: Product):void{
    this.basketContentSubject.value.push(product);
    this.basketContentSubject.next(this.basketContentSubject.value);
  }

  removeFromBasket():void{

  }

  getBasketContent(): Product[] {
    return this.basketContentSubject.value;
  }
}
