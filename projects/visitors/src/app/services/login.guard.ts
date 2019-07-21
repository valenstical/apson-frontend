import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from 'shared';
import { MEMBERS_URL } from 'helpers';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const authenticated = this.authService.isLoggedIn(MEMBERS_URL);
    if (authenticated) {
      this.authService.gotoMembers();
    }
    return authenticated;
  }
}
