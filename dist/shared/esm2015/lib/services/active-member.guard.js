/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class ActiveMemberGuard {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        /** @type {?} */
        const isActive = this.authService.getMember().isActive;
        if (!isActive) {
            this.router.navigateByUrl('/members/membership-renewal');
        }
        return isActive;
    }
}
ActiveMemberGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ActiveMemberGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router }
];
/** @nocollapse */ ActiveMemberGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActiveMemberGuard_Factory() { return new ActiveMemberGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }, token: ActiveMemberGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveMemberGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    ActiveMemberGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW1lbWJlci5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY3RpdmUtbWVtYmVyLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7OztJQUV4RSxXQUFXLENBQ1QsSUFBNEIsRUFDNUIsS0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVE7UUFDdEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxXQUFXO1lBRmxCLE1BQU07Ozs7Ozs7O0lBUU0sd0NBQWdDOzs7OztJQUFFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1lbWJlckd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0TWVtYmVyKCkuaXNBY3RpdmU7XG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL21lbWJlcnMvbWVtYmVyc2hpcC1yZW5ld2FsJyk7XG4gICAgfVxuICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgfVxufVxuIl19