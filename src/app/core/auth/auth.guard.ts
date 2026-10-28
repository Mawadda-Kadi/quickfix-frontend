import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if (!authService.isTokenExpired()) {
    return true;
  }

  authService.logout();

  return router.createUrlTree(['/login']);
};
