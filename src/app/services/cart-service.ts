import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  getCart(){
    return[...this.cart];
  }
  addToCart(product: Product): void{
    this.cart.push(product);
  }
  removeCart(index: number): void{
    this.cart.splice(index, 1);
  }
  clearCart(): void{
    this.cart = [];
  }
  getTotal(): number {
    return this.cart.reduce((total,prod) => total + prod.precio, 0);
  }
  getCount(): number {
    return this.cart.length;
  }
  constructor() { }
}
