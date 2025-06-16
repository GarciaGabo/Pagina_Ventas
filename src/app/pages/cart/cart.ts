import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Product } from '../../services/products';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}
  get cart(): Product[]{
    return this.cartService.getCart();
  }
  get total(): number {
    return this.cartService.getTotal();
  }
  remove(index: number){
    this.cartService.removeCart(index);
  }
  clear() {
    this.cartService.clearCart();
  }
}
