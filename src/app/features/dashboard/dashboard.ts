import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService } from '../../core/auth/auth.service';
import { TicketService } from '../tickets/ticket.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private ticketService: TicketService,
    private router: Router
  ) {}

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe({
      next: tickets => {
        console.log('Tickets:', tickets);
        this.router.navigate(['/tickets'])
      },

      error: error => {
        console.error('Fehler beim Laden der Tickets:', error);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
