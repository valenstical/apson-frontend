/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { MEMBERS_URL, VISITORS_URL, STUDENTS_URL, ADMIN_URL } from 'helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./http.service";
var AuthService = /** @class */ (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = MEMBERS_URL;
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
        location.assign(MEMBERS_URL);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoVisitors = /**
     * @return {?}
     */
    function () {
        location.assign(VISITORS_URL);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFFN0U7SUFNRSxxQkFBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURwRSxRQUFHLEdBQUcsV0FBVyxDQUFDO0lBQ3FELENBQUM7Ozs7O0lBRXhFLDJCQUFLOzs7O0lBQUwsVUFBTSxJQUFTO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLHVCQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELCtCQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELCtCQUFTOzs7SUFBVDs7WUFDUSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCw0QkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU8sZ0NBQVU7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRU0saUNBQVc7OztJQUFsQjtRQUNFLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGtDQUFZOzs7SUFBbkI7UUFDRSxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxrQ0FBWTs7O0lBQW5CO1FBQ0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sK0JBQVM7OztJQUFoQjtRQUNFLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7WUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMvQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEvREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxNQUFNO2dCQUNOLFdBQVc7OztzQkFKcEI7Q0F1RUMsQUFoRUQsSUFnRUM7U0E3RFksV0FBVzs7O0lBQ3RCLDZCQUF3Qjs7SUFDeEIsMEJBQWtCOzs7OztJQUNOLDZCQUFzQjs7Ozs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICcuLi9tb2RlbHMvbWVtYmVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IE1FTUJFUlNfVVJMLCBWSVNJVE9SU19VUkwsIFNUVURFTlRTX1VSTCwgQURNSU5fVVJMIH0gZnJvbSAnaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIG1lbWJlcjogU3ViamVjdDxNZW1iZXI+O1xuICB1cmwgPSBNRU1CRVJTX1VSTDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cbiAgbG9naW4oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KCdtZW1iZXJzL2xvZ2luJywgeyAuLi5kYXRhIH0sICdwb3N0Jyk7XG4gIH1cblxuICBzZXRNZW1iZXIobWVtYmVyOiBNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNZW1iZXIoKTtcbiAgICB0aGlzLm1lbWJlci5uZXh0KG1lbWJlcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lbWJlcicsIEpTT04uc3RyaW5naWZ5KG1lbWJlcikpO1xuICB9XG5cbiAgZ2V0TWVtYmVyKCk6IE1lbWJlciB7XG4gICAgY29uc3QgbWVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lbWJlcicpO1xuICAgIGlmIChtZW1iZXIpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKG1lbWJlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMubWVtYmVyID0gbnVsbDtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbWVtYmVyJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gIH1cblxuICBwcml2YXRlIGluaXRNZW1iZXIoKSB7XG4gICAgaWYgKCF0aGlzLm1lbWJlcikge1xuICAgICAgdGhpcy5tZW1iZXIgPSBuZXcgU3ViamVjdDxNZW1iZXI+KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvdG9NZW1iZXJzKCkge1xuICAgIGxvY2F0aW9uLmFzc2lnbihNRU1CRVJTX1VSTCk7XG4gIH1cblxuICBwdWJsaWMgZ290b1Zpc2l0b3JzKCkge1xuICAgIGxvY2F0aW9uLmFzc2lnbihWSVNJVE9SU19VUkwpO1xuICB9XG5cbiAgcHVibGljIGdvdG9TdHVkZW50cygpIHtcbiAgICBsb2NhdGlvbi5hc3NpZ24oU1RVREVOVFNfVVJMKTtcbiAgfVxuXG4gIHB1YmxpYyBnb3RvQWRtaW4oKSB7XG4gICAgbG9jYXRpb24uYXNzaWduKEFETUlOX1VSTCk7XG4gIH1cblxuICBpc0xvZ2dlZEluKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgY29uc3QgbWVtYmVyID0gdGhpcy5nZXRNZW1iZXIoKTtcbiAgICBpZiAobWVtYmVyKSB7XG4gICAgICB0aGlzLmluaXRNZW1iZXIoKTtcbiAgICAgIHRoaXMubWVtYmVyLm5leHQobWVtYmVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==