import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.less']
})


export class InventoryComponent implements OnInit {
    pageTitle: string | undefined;

  constructor() { }

  ngOnInit(){
    
    this.pageTitle = 'Inventory';
  }
}
