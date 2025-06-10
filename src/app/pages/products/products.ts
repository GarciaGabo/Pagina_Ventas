import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';
import { ProductModal } from '../../shared/product-modal/product-modal';
@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, ProductModal],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos : Product[] = [];
  productSelected: Product | null = null;
  showModal = false;

  constructor(private product:Products){
    this.productos = this.product.getProducts();
  }
  openModal(product: Product) {
    this.productSelected = product;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.productSelected = null;
  }
}
