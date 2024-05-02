import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string="";
  password: string="";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Assuming you have a method in AuthService to get user profile
    this.authService.getUserProfile().subscribe(profile => {
      this.username = profile.username;
      this.password = ''; // For security reasons, we don't fetch the password
    });
  }

  updateProfile() {
    const updatedProfile = { username: this.username, password: this.password };
    this.authService.updateUserProfile(updatedProfile).subscribe(response => {
      console.log(response); // Handle response
    });
  }
}

