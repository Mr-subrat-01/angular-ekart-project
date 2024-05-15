import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {
  @Input()
  totalproducts: number = 0;
  @Input()
  totalinstock: number = 0;
  @Input()
  totaloutofstock: number = 0;

  selectedFilterChangedValue: string = "all";

  @Output()
  HandelFilterChangedByParent:EventEmitter<string> = new EventEmitter<string>();

  SelectedFilterChanged() {
    this.HandelFilterChangedByParent.emit(this.selectedFilterChangedValue);
  }
}
