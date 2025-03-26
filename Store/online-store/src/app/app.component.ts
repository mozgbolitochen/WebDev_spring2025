import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = [ 'All', 'Smartphones', 'Laptops', 'Gaming', 'Accessories'];
  selectedCategory: string  = 'All';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
