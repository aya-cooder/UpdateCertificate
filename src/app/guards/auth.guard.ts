import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NgToastService } from 'ng-angular-popup';
export const canActivateGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toaster=inject(NgToastService)

  if (authService.isLoggedIn()) {
    return true;
  } else {
    toaster.error({detail:"ERROR", summary:"Please Login First!"});
    router.navigate(['/Login']);
    return false;
  }
};
