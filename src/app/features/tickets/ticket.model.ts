export type Category =
  | 'HARDWARE'
  | 'SOFTWARE'
  | 'NETWORK'
  | 'USER_ACCOUNT'
  | 'OTHER';

export type Priority =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'CRITICAL';

export type TicketStatus =
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'RESOLVED'
  | 'CLOSED';

export interface TicketResponse {
  id: number;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: TicketStatus;

  creatorId: number;
  creatorUsername: string;

  assignedSupportId: number | null;
  assignedSupportUsername: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface CreateTicketRequest {
  title: string;
  description: string;
  category: Category;
  priority: Priority;
}
