import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  constructor(private authService: AuthService) {}

  loginUser() {
    const userData = { username: this.username, password: this.password };
    this.authService.loginUser(userData).subscribe(response => {
      console.log(response); // Handle response
    });
  }
}
