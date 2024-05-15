import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    GetDiscount(price: number, dis: number) {
      return price - (price * dis / 100);
    }
    
    SelectedProduct: Product;
    SetSelectedProduct(prod:Product) {
      this.SelectedProduct = prod;
    }
  
    allproducts = [
    {
      pId: 1,
      pName: "Men's Shoes Sonic",
      pPrice: 999.99,
      pDiscount: 30,
      pColors: ["Red", "Green", "White", "Black"],
      pImage: "assets/products/p1.jpg",
      pInStock: true
    },
    {
      pId: 2,
      pName: "Men's Shirt",
      pPrice: 1499.99,
      pDiscount: 20,
      pColors: ["Blue", "Pink", "Yellow", "Black"],
      pImage: "assets/products/p2.jpg",
      pInStock: false
    },
    {
      pId: 3,
      pName: "SmartWatch Z",
      pPrice: 1499.99,
      // pDiscount: 10,
      pColors: ["Black", "Silver", "Gold"],
      pImage: "assets/products/p3.jpg",
      pInStock: true
    },
    {
      pId: 4,
      pName: "Men's T-shirt",
      pPrice: 899.99,
      // pDiscount: 15,
      pColors: ["White", "Black"],
      pImage: "assets/products/p4.jpg",
      pInStock: true
    },
    {
      pId: 5,
      pName: "Men's Jacket",
      pPrice: 199.99,
      pDiscount: 25,
      pColors: ["Black", "Red", "Blue"],
      pImage: "assets/products/p5.jpg",
      pInStock: false
    }
  ];

  totalProducts = this.allproducts.length;
  totalStocks = this.allproducts.filter(p => p.pInStock===true).length; 
  totalOutOfStocks = this.allproducts.filter(p => p.pInStock === false).length; 
  
  showProducts: string = "all";
  FilterChanged(ChangedValue:string) {
    this.showProducts = ChangedValue;
  }

  @Input()
  searchText: string = "";
  
}
