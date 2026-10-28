import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

// If a JWT exists, add it to the request before the request goes to Spring Boot.
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  if (req.url.includes('/api/auth/login')) {
      return next(req);
  }


  const token = authService.getToken();

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Send the modified request onward
    return next(clonedRequest);
  }

  // sends the original request unchanged
  return next(req);
};
