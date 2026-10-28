import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TicketService } from '../ticket.service';
import { TicketResponse } from '../ticket.model';
import { StatusLabelPipe } from '../../../shared/pipes/status-label.pipe';
import { PriorityLabelPipe } from '../../../shared/pipes/priority-label.pipe';
import { CategoryLabelPipe } from '../../../shared/pipes/category-label.pipe';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    RouterLink,
    StatusLabelPipe,
    PriorityLabelPipe,
    CategoryLabelPipe,
    DatePipe
  ],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.scss'
})
export class TicketListComponent implements OnInit {

  tickets: TicketResponse[] = [];

  constructor(
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe({
      next: tickets => {
        console.log('Tickets vom Backend:', tickets);
        this.tickets = tickets;
      },

      error: error => {
        console.error('Fehler beim Laden der Tickets:', error);
      }
    });
  }
}
