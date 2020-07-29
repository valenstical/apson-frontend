/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { STUDENTS_URL, ADMIN_URL } from 'helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./http.service";
var AuthService = /** @class */ (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = 'members';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.httpService.request('members/login', tslib_1.__assign({}, data), 'post');
    };
    /**
     * @param {?} member
     * @return {?}
     */
    AuthService.prototype.setMember = /**
     * @param {?} member
     * @return {?}
     */
    function (member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getMember = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    };
    /**
     * @private
     * @return {?}
     */
    AuthService.prototype.initMember = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.member) {
            this.member = new Subject();
        }
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoMembers = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/members');
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoVisitors = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/');
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoStudents = /**
     * @return {?}
     */
    function () {
        location.assign(STUDENTS_URL);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoAdmin = /**
     * @return {?}
     */
    function () {
        location.assign(ADMIN_URL);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AuthService.prototype.isLoggedIn = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.url = url;
        /** @type {?} */
        var member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Router },
        { type: HttpService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /** @type {?} */
    AuthService.prototype.member;
    /** @type {?} */
    AuthService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.httpService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRWxEO0lBTUUscUJBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFEcEUsUUFBRyxHQUFHLFNBQVMsQ0FBQztJQUN1RCxDQUFDOzs7OztJQUV4RSwyQkFBSzs7OztJQUFMLFVBQU0sSUFBUztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZUFBZSx1QkFBTyxJQUFJLEdBQUksTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCwrQkFBUzs7OztJQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCwrQkFBUzs7O0lBQVQ7O1lBQ1EsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsNEJBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVPLGdDQUFVOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVNLGlDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sa0NBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxrQ0FBWTs7O0lBQW5CO1FBQ0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sK0JBQVM7OztJQUFoQjtRQUNFLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7WUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMvQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEvREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxNQUFNO2dCQUNOLFdBQVc7OztzQkFKcEI7Q0F1RUMsQUFoRUQsSUFnRUM7U0E3RFksV0FBVzs7O0lBQ3RCLDZCQUF3Qjs7SUFDeEIsMEJBQWdCOzs7OztJQUNKLDZCQUFzQjs7Ozs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICcuLi9tb2RlbHMvbWVtYmVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IFNUVURFTlRTX1VSTCwgQURNSU5fVVJMIH0gZnJvbSAnaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIG1lbWJlcjogU3ViamVjdDxNZW1iZXI+O1xuICB1cmwgPSAnbWVtYmVycyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxuXG4gIGxvZ2luKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucmVxdWVzdCgnbWVtYmVycy9sb2dpbicsIHsgLi4uZGF0YSB9LCAncG9zdCcpO1xuICB9XG5cbiAgc2V0TWVtYmVyKG1lbWJlcjogTWVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbml0TWVtYmVyKCk7XG4gICAgdGhpcy5tZW1iZXIubmV4dChtZW1iZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZW1iZXInLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcbiAgfVxuXG4gIGdldE1lbWJlcigpOiBNZW1iZXIge1xuICAgIGNvbnN0IG1lbWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXInKTtcbiAgICBpZiAobWVtYmVyKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShtZW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLm1lbWJlciA9IG51bGw7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ21lbWJlcicpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0TWVtYmVyKCkge1xuICAgIGlmICghdGhpcy5tZW1iZXIpIHtcbiAgICAgIHRoaXMubWVtYmVyID0gbmV3IFN1YmplY3Q8TWVtYmVyPigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnb3RvTWVtYmVycygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbWVtYmVycycpO1xuICB9XG5cbiAgcHVibGljIGdvdG9WaXNpdG9ycygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gIH1cblxuICBwdWJsaWMgZ290b1N0dWRlbnRzKCkge1xuICAgIGxvY2F0aW9uLmFzc2lnbihTVFVERU5UU19VUkwpO1xuICB9XG5cbiAgcHVibGljIGdvdG9BZG1pbigpIHtcbiAgICBsb2NhdGlvbi5hc3NpZ24oQURNSU5fVVJMKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4odXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICBjb25zdCBtZW1iZXIgPSB0aGlzLmdldE1lbWJlcigpO1xuICAgIGlmIChtZW1iZXIpIHtcbiAgICAgIHRoaXMuaW5pdE1lbWJlcigpO1xuICAgICAgdGhpcy5tZW1iZXIubmV4dChtZW1iZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19