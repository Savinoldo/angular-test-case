import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent implements OnInit {
  pageTitle: string | undefined;

  constructor() { }

  ngOnInit(){
    
    this.pageTitle = 'Reports';
  }
}