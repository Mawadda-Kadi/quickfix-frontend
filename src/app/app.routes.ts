import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { DashboardComponent } from './features/dashboard/dashboard';
import { UserComponent } from './features/users/user';
//import { SupportComponent } from './features/support/support';
import { TicketListComponent } from './features/tickets/ticket-list/ticket-list';
import { TicketDetailComponent } from './features/tickets/ticket-detail/ticket-detail';
import { TicketCreateComponent } from './features/tickets/ticket-create/ticket-create';
import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tickets',
    component: TicketListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'tickets/new',
    component: TicketCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'tickets/:id',
    component: TicketDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['ADMIN']
    }
  },
/*
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['SUPPORT', 'ADMIN']
    }
  },*/
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
