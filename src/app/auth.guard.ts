import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { CommonService } from 'platform-utils';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const commonService = inject(CommonService);
  const url: string = state.url;

  return checkLogin(url, router, commonService);
};

export const authGuardChild: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const commonService = inject(CommonService);
  const url: string = state.url;

  return checkLogin(url, router, commonService);
};

function checkLogin(url: string, router: Router, commonService: CommonService): boolean {
  if (url === '/admin/login') {
    return true;
  }
  if (commonService.isAuthenticated) {
    return true;
  }
  router.navigate(['admin/login'], { queryParams: { returnUrl: url } });
  return false;
}

function unAuthorizedAction(router: Router): boolean {
  router.navigate(['error']);
  return false;
}
