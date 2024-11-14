import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const url: string = state.url;

  return checkLogin(url, router, authService);
};

export const authGuardChild: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const url: string = state.url;

  return checkLogin(url, router, authService);
};

function checkLogin(url: string, router: Router, authService: AuthService): boolean {
  if (url === '/admin/login') {
    return true;
  }
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['admin/login'], { queryParams: { returnUrl: url } });
  return false;
}

function unAuthorizedAction(router: Router): boolean {
  router.navigate(['error']);
  return false;
}
