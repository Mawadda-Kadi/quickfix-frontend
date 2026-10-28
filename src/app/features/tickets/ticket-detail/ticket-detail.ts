import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { TicketService } from '../ticket.service';
import { TicketResponse } from '../ticket.model';
import { StatusLabelPipe } from '../../../shared/pipes/status-label.pipe';
import { PriorityLabelPipe } from '../../../shared/pipes/priority-label.pipe';
import { CategoryLabelPipe } from '../../../shared/pipes/category-label.pipe';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [
    RouterLink,
    StatusLabelPipe,
    PriorityLabelPipe,
    CategoryLabelPipe,
    DatePipe
  ],
  templateUrl: './ticket-detail.html',
  styleUrl: './ticket-detail.scss'
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketResponse | null = null;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketService.getTicketById(id).subscribe({
      next: ticket => {
        this.ticket = ticket;
      },

      error: error => {
        console.error('Fehler beim Laden des Tickets:', error);
      }
    });
  }
}
