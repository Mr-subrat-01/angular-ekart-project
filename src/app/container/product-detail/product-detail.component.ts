import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input()
  SelectedProduct: Product;

  UpdateSelectedProduct() {
    console.log(this.SelectedProduct)
    this.SelectedProduct = null;
    console.log(this.SelectedProduct)
  }

  GetDiscount() {
    if (this.SelectedProduct.discount) {
      return this.SelectedProduct.price - (this.SelectedProduct.price * this.SelectedProduct.discount / 100);
    }
    return this.SelectedProduct.price;
  }
}
