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

  isHoverd: boolean = false;
  toggleHover() {
   this.isHoverd= !this.isHoverd
  }

  GetDiscount() {
    if (this.product.discount) {
      return this.product.price - (this.product.price * this.product.discount / 100);
    }
    return this.product.price;
  }
}
