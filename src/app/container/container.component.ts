import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @Input()
  searchText: string = "";

  setSearchData(value:string) {
    this.searchText = value;
  }
}
