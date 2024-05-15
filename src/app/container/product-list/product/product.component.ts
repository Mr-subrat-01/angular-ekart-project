import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: Product;

  GetDiscount() {
    if (this.product.pDiscount) {
      return this.product.pPrice - (this.product.pPrice * this.product.pDiscount / 100);
    }
    return this.product.pPrice;
  }
}
