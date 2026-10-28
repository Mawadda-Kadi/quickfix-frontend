import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TicketService } from '../ticket.service';
import { Category, Priority, CreateTicketRequest } from '../ticket.model';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-create.html',
  styleUrl: './ticket-create.scss'
})
export class TicketCreateComponent {

  title = '';
  description = '';
  category: Category = 'OTHER';
  priority: Priority = 'MEDIUM';

  createError = '';

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {}

  createTicket(): void {
    this.createError = '';

    const request: CreateTicketRequest = {
      title: this.title,
      description: this.description,
      category: this.category,
      priority: this.priority
    };

    this.ticketService.createTicket(request).subscribe({
      next: ticket => {
        this.router.navigate(['/tickets', ticket.id]);
      },

      error: error => {
        console.error('Fehler beim Erstellen des Tickets:', error);
        this.createError = 'Das Ticket konnte nicht erstellt werden.';
      }
    });
  }

}
