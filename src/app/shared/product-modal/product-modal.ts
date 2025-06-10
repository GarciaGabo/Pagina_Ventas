import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-modal',
  imports: [CommonModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css'
})
export class ProductModal {
  @Input() product! :Product;
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
