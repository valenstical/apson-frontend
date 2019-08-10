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
var ActiveMemberGuard = /** @class */ (function () {
    function ActiveMemberGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    ActiveMemberGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var isActive = this.authService.getMember().isActive;
        if (!isActive) {
            this.router.navigateByUrl('/members/membership-renewal');
        }
        return isActive;
    };
    ActiveMemberGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ActiveMemberGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router }
    ]; };
    /** @nocollapse */ ActiveMemberGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActiveMemberGuard_Factory() { return new ActiveMemberGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }, token: ActiveMemberGuard, providedIn: "root" });
    return ActiveMemberGuard;
}());
export { ActiveMemberGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW1lbWJlci5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY3RpdmUtbWVtYmVyLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0M7SUFJRSwyQkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7OztJQUV4RSx1Q0FBVzs7Ozs7SUFBWCxVQUNFLElBQTRCLEVBQzVCLEtBQTBCOztZQUVwQixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRO1FBQ3RELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxXQUFXO2dCQUZsQixNQUFNOzs7NEJBTFI7Q0F5QkMsQUFoQkQsSUFnQkM7U0FiWSxpQkFBaUI7Ozs7OztJQUNoQix3Q0FBZ0M7Ozs7O0lBQUUsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG4gIFJvdXRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlTWVtYmVyR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5hdXRoU2VydmljZS5nZXRNZW1iZXIoKS5pc0FjdGl2ZTtcbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbWVtYmVycy9tZW1iZXJzaGlwLXJlbmV3YWwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQWN0aXZlO1xuICB9XG59XG4iXX0=