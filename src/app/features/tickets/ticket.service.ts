import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateTicketRequest, TicketResponse } from './ticket.model';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private readonly apiUrl = 'http://localhost:8081/api/tickets';

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<TicketResponse> {
    return this.http.get<TicketResponse>(`${this.apiUrl}/${id}`);
  }

  createTicket(request: CreateTicketRequest): Observable<TicketResponse> {
    return this.http.post<TicketResponse>(
      this.apiUrl,
      request
    );
  }
}
