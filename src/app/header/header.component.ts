import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/profile/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(public ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.ProfileService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
