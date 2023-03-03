import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less'],
    providers: [HomePageService],
})
export class HomePageComponent implements OnInit {
    pageTitle: string | undefined;

    constructor() { }
  
    ngOnInit(){
      this.pageTitle = 'Home';
  }
}
