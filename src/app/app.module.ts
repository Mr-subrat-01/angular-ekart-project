import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchbarComponent } from './container/searchbar/searchbar.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterProductComponent } from './container/product-list/filter-product/filter-product.component';
import { ContainerComponent } from './container/container.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    SearchbarComponent,
    ProductListComponent,
    ProductComponent,
    FilterProductComponent,
    ContainerComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
