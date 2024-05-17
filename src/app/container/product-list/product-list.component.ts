import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {




  //   allproducts = [
  //   {
  //     pId: 1,
  //     pName: "Men's Shoes Sonic",
  //     pPrice: 999.99,
  //     pDiscount: 30,
  //     pColors: ["Red", "Green", "White", "Black"],
  //     pImage: "assets/products/p1.jpg",
  //     pInStock: true
  //   },
  //   {
  //     pId: 2,
  //     pName: "Men's Shirt",
  //     pPrice: 1499.99,
  //     pDiscount: 20,
  //     pColors: ["Blue", "Pink", "Yellow", "Black"],
  //     pImage: "assets/products/p2.jpg",
  //     pInStock: false
  //   },
  //   {
  //     pId: 3,
  //     pName: "SmartWatch Z",
  //     pPrice: 1499.99,
  //     // pDiscount: 10,
  //     pColors: ["Black", "Silver", "Gold"],
  //     pImage: "assets/products/p3.jpg",
  //     pInStock: true
  //   },
  //   {
  //     pId: 4,
  //     pName: "Men's T-shirt",
  //     pPrice: 899.99,
  //     // pDiscount: 15,
  //     pColors: ["White", "Black"],
  //     pImage: "assets/products/p4.jpg",
  //     pInStock: true
  //   },
  //   {
  //     pId: 5,
  //     pName: "Men's Jacket",
  //     pPrice: 199.99,
  //     pDiscount: 25,
  //     pColors: ["Black", "Red", "Blue"],
  //     pImage: "assets/products/p5.jpg",
  //     pInStock: false
  //   }
  // ];
  allproducts = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 200,
      discount: 10,
      inStock: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ns of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 150,
      discount: 0,
      inStock: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      slug: "nike-react-miler"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 180,
      discount: 5,
      inStock: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy lorem10 text of the printing and typesetting industry. Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Brown", "Red"],
      price: 220,
      discount: 10,
      inStock: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "nike-joyride-run-flyknit"
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 280,
      discount: 15,
      inStock: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      slug: "nike-mercurial-vapor-13-elite-fg"
    },
    {
      id: 6,
      name: "Adidas Ultraboost 21",
      description: "The adidas Ultraboost 21 is designed for comfort and performance. It features adidas' most responsive cushioning ever, providing a smooth and energized ride.",
      brand: "ADIDAS",
      gender: "FEMALE",
      category: "RUNNING",
      size: [7, 8, 9, 10, 11],
      color: ["Black", "White", "Grey"],
      price: 220,
      discount: 10,
      inStock: true,
      items_left: 5,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1eb190cf35440038645ad4f0105e2e7_9366/Ultraboost_21_Running_Shoes_Black_GX5236_01_standard.jpg",
      slug: "adidas-ultraboost-21"
    },
    {
      id: 7,
      name: "Adidas NMD R1",
      description: "The adidas NMD R1 combines a sleek and stylish design with unparalleled comfort. It features a sock-like construction and responsive cushioning for all-day wear.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White", "Red"],
      price: 180,
      discount: 5,
      inStock: true,
      items_left: 8,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1dd243f62cfe4618a92d1a9701aebf69_9366/NMD_R1_Shoes_Green_ID5756_01_standard.jpg",
      slug: "adidas-nmd-r1"
    },
    {
      id: 8,
      name: "Adidas Stan Smith",
      description: "The adidas Stan Smith is a timeless classic that never goes out of style. With its clean and minimalist design, it's the perfect shoe for any occasion.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Green", "Blue"],
      price: 120,
      discount: 0,
      inStock: true,
      items_left: 10,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb05575d29d845b598718c22508e3d8d_9366/Stan_Smith_CS_Shoes_Black_IG1284_01_standard.jpg",
      slug: "adidas-stan-smith"
    },
    {
      id: 9,
      name: "Adidas Superstar",
      description: "The adidas Superstar is an iconic sneaker that has been popular for decades. With its classic shell toe and signature three stripes, it's a must-have for any sneakerhead.",
      brand: "ADIDAS",
      gender: "FEMALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Gold"],
      price: 130,
      discount: 0,
      inStock: true,
      items_left: 6,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/adbe6529d50d4462b290df567dc0087b_9366/Superstar_XLG_Shoes_Blue_ID5699_01_standard.jpg",
      slug: "adidas-superstar"
    },
    {
      id: 10,
      name: "Adidas Ultraboost DNA",
      description: "The adidas Ultraboost DNA combines sleek style with cutting-edge technology. It features a Primeknit upper and responsive Boost cushioning for maximum comfort and performance.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "RUNNING",
      size: [7, 8, 9, 10, 11],
      color: ["Black", "White", "Grey"],
      price: 240,
      discount: 15,
      inStock: true,
      items_left: 4,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f225a0bbc3e43729858af0100006731_9366/Ultraboost_1.0_Shoes_White_HQ4207_01_standard.jpg",
      slug: "adidas-ultraboost-dna"
    },
    {
      id: 11,
      name: "Adidas ZX 2K Boost",
      description: "The adidas ZX 2K Boost combines retro style with modern comfort. It features a breathable mesh upper and responsive Boost cushioning for a smooth ride.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White", "Blue"],
      price: 170,
      discount: 10,
      inStock: true,
      items_left: 7,
      imageURL: "https://images-static.nykaa.com/media/catalog/product/a/4/a4f18c2fx7054_1.jpg?tr=w-344,h-344,cm-pad_resize",
      slug: "adidas-zx-2k-boost"
    },
    {
      id: 12,
      name: "Adidas Originals Forum 84",
      description: "The adidas Originals Forum 84 is a retro-inspired sneaker with a modern twist. It features a leather upper and adjustable ankle strap for a secure fit.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Red"],
      price: 150,
      discount: 5,
      inStock: true,
      items_left: 9,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0924c964ace43c78dd1ac5e00377f5e_9366/Forum_Low_Shoes_White_FY7756_04_standard.jpg",
      slug: "adidas-originals-forum-84"
    },
    {
      id: 13,
      name: "Adidas Originals Superstar Bold",
      description: "The adidas Originals Superstar Bold puts a bold spin on the classic Superstar silhouette. It features a chunky platform sole and premium leather upper for a modern look.",
      brand: "ADIDAS",
      gender: "FEMALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Gold"],
      price: 130,
      discount: 0,
      inStock: true,
      items_left: 7,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e75d90ba64ed4c47ac30c74490090bf5_9366/Superstar_XLG_Shoes_Black_IG9777_01_standard.jpg",
      slug: "adidas-originals-superstar-bold"
    },
    {
      id: 14,
      name: "Adidas Ultraboost 22",
      description: "The adidas Ultraboost 22 is the latest iteration of the iconic Ultraboost series. It features a Primeknit upper and responsive Boost cushioning for unrivaled comfort and performance.",
      brand: "ADIDAS",
      gender: "FEMALE",
      category: "RUNNING",
      size: [7, 8, 9, 10, 11],
      color: ["Black", "White", "Grey"],
      price: 242,
      discount: 8,
      inStock: true,
      items_left: 3,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8cbca6b8a7594df9adc2ae6f0169c5e1_9366/Ultraboost_22_Shoes_Black_GX9783_01_standard.jpg",
      slug: "adidas-ultraboost-22"
    },
    {
      id: 15,
      name: "Adidas NMD R2",
      description: "The adidas NMD R2 is a modern take on a classic silhouette. It features a Primeknit upper and responsive Boost cushioning for all-day comfort.",
      brand: "ADIDAS",
      gender: "MALE",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White", "Red"],
      price: 154,
      discount: 10,
      inStock: true,
      items_left: 6,
      imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7877e293f30c46d8a8cdaf23010058a0_9366/NMD_R1_SHOES_Burgundy_IE4749_01_standard.jpg",
      slug: "adidas-nmd-r2"
    }
  ];

  totalProducts = this.allproducts.length;
  totalStocks = this.allproducts.filter(p => p.inStock === true).length;
  totalOutOfStocks = this.allproducts.filter(p => p.inStock === false).length;

  showProducts: string = "all";
  FilterChanged(ChangedValue: string) {
    this.showProducts = ChangedValue;
  }

  @Input()
  searchText: string = "";

  GetDiscount(price: number, dis: number) {
    return price - (price * dis / 100);
  }

  SelectedProduct: Product;

  SetSelectedProduct(prod: Product) {
    this.SelectedProduct = prod;
  }



}
