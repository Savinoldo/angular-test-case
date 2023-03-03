import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './services/profile.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    lastName: ['', [Validators.required, Validators.maxLength(255)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    websiteUrl: ['', [Validators.pattern('')]]
  });
  user: any;

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = { ...this.user, ...this.userForm.value };
      this.profileService.saveUser(user).subscribe(() => {
        alert('User data saved successfully');
      });
    } else {
      alert('Please fill out all required fields');
    }
  }

}
