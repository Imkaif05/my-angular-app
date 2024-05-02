import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string="";
  password: string="";

  constructor(private authService: AuthService) {}

  registerUser() {
    const userData = { username: this.username, password: this.password };
    this.authService.registerUser(userData).subscribe(response => {
      console.log(response); // Handle response
    });
  }
}

