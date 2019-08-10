import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
export declare class ActiveMemberGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
