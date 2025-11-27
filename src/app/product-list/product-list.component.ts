import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte black',
    discountedPrice: 6.5,
    inStock: 0
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discountedPrice / 100)
  }
}
