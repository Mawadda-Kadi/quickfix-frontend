import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  username = '';
  password = '';
  loginError = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.loginError = '';

    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: response => {
        console.log('Login successful:', response);

        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role);

        this.router.navigate(['/dashboard']);
      },

      error: error => {
        console.error('Login failed:', error);
        this.loginError = 'Benutzername oder Passwort ist falsch.';
      }
    });
  }
}
