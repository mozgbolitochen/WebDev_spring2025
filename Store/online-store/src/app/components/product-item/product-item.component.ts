import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;

  @Output() like = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  @Output() addToCart = new EventEmitter<string>();
  @Output() removeFromCart = new EventEmitter<string>();
  

  onLike() {
    this.like.emit(this.product.name);
  }
  onRemove() {
    this.remove.emit(this.product.name);
  }
  onAddToCart() {
    this.addToCart.emit(this.product.name);
  }
  onRemoveFromCart() {
    this.removeFromCart.emit(this.product.name);
  }
}
