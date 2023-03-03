import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  selectedItem = '';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}