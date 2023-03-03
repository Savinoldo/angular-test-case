import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user: any = {
    email: 'user@example.com',
    name: 'Savinkin',
    lastName: 'Sergey',
    phoneNumber: '+794414441',
    websiteUrl: 'www.website.com'
  };

  constructor() { }

  getUser(): Observable<any> {
    return of(this.user);
  }

  saveUser(user: any): Observable<any> {
    this.user = user;
    return of(this.user);
  }

  getFullName(): string {
    return `${this.user.name} ${this.user.lastName}`;
  }
}
