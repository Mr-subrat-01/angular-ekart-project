import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchText: string = "";
  @Output()
  HandelSearchTextByParent: EventEmitter<string> = new EventEmitter<string>();
  
  // searching() {
  //   this.HandelSearchTextByParent.emit(this.searchText)
  // }

  // UpdateSearchText(searchInput:HTMLInputElement) {
  //   this.searchText = searchInput.value;
  //   this.HandelSearchTextByParent.emit(this.searchText);
  // }

  @ViewChild('searchInput') searchInput: ElementRef;

  UpdateSearchTextByViewChild() {
      this.searchText = this.searchInput.nativeElement.value;
      this.HandelSearchTextByParent.emit(this.searchText);
  }
}
