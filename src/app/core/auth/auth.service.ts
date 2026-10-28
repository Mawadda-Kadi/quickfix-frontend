import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginRequest, LoginResponse } from './auth.model';

// Angular creates one global AuthService
@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private readonly apiUrl = 'http://localhost:8081/api/auth';

  // HttpClient → sends HTTP requests to Spring Boot
  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      request
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role')
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();

    if (!token) {
      return true;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiration = payload.exp * 1000;

    return Date.now() >= expiration;
  }
}


