/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { STUDENTS_URL, ADMIN_URL } from 'helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./http.service";
export class AuthService {
    /**
     * @param {?} router
     * @param {?} httpService
     */
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = 'members';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    login(data) {
        return this.httpService.request('members/login', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} member
     * @return {?}
     */
    setMember(member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    }
    /**
     * @return {?}
     */
    getMember() {
        /** @type {?} */
        const member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    }
    /**
     * @return {?}
     */
    logout() {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    }
    /**
     * @private
     * @return {?}
     */
    initMember() {
        if (!this.member) {
            this.member = new Subject();
        }
    }
    /**
     * @return {?}
     */
    gotoMembers() {
        this.router.navigateByUrl('/members');
    }
    /**
     * @return {?}
     */
    gotoVisitors() {
        this.router.navigateByUrl('/');
    }
    /**
     * @return {?}
     */
    gotoStudents() {
        location.assign(STUDENTS_URL);
    }
    /**
     * @return {?}
     */
    gotoAdmin() {
        location.assign(ADMIN_URL);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isLoggedIn(url) {
        this.url = url;
        /** @type {?} */
        const member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Router },
    { type: HttpService }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpService)); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFLbEQsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBR3RCLFlBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFEcEUsUUFBRyxHQUFHLFNBQVMsQ0FBQztJQUN1RCxDQUFDOzs7OztJQUV4RSxLQUFLLENBQUMsSUFBUztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZUFBZSxvQkFBTyxJQUFJLEdBQUksTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxTQUFTOztjQUNELE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztjQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxNQUFNO1lBQ04sV0FBVzs7Ozs7SUFPbEIsNkJBQXdCOztJQUN4QiwwQkFBZ0I7Ozs7O0lBQ0osNkJBQXNCOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJy4uL21vZGVscy9tZW1iZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU1RVREVOVFNfVVJMLCBBRE1JTl9VUkwgfSBmcm9tICdoZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgbWVtYmVyOiBTdWJqZWN0PE1lbWJlcj47XG4gIHVybCA9ICdtZW1iZXJzJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cbiAgbG9naW4oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KCdtZW1iZXJzL2xvZ2luJywgeyAuLi5kYXRhIH0sICdwb3N0Jyk7XG4gIH1cblxuICBzZXRNZW1iZXIobWVtYmVyOiBNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNZW1iZXIoKTtcbiAgICB0aGlzLm1lbWJlci5uZXh0KG1lbWJlcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lbWJlcicsIEpTT04uc3RyaW5naWZ5KG1lbWJlcikpO1xuICB9XG5cbiAgZ2V0TWVtYmVyKCk6IE1lbWJlciB7XG4gICAgY29uc3QgbWVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lbWJlcicpO1xuICAgIGlmIChtZW1iZXIpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKG1lbWJlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMubWVtYmVyID0gbnVsbDtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbWVtYmVyJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gIH1cblxuICBwcml2YXRlIGluaXRNZW1iZXIoKSB7XG4gICAgaWYgKCF0aGlzLm1lbWJlcikge1xuICAgICAgdGhpcy5tZW1iZXIgPSBuZXcgU3ViamVjdDxNZW1iZXI+KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvdG9NZW1iZXJzKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9tZW1iZXJzJyk7XG4gIH1cblxuICBwdWJsaWMgZ290b1Zpc2l0b3JzKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgfVxuXG4gIHB1YmxpYyBnb3RvU3R1ZGVudHMoKSB7XG4gICAgbG9jYXRpb24uYXNzaWduKFNUVURFTlRTX1VSTCk7XG4gIH1cblxuICBwdWJsaWMgZ290b0FkbWluKCkge1xuICAgIGxvY2F0aW9uLmFzc2lnbihBRE1JTl9VUkwpO1xuICB9XG5cbiAgaXNMb2dnZWRJbih1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuZ2V0TWVtYmVyKCk7XG4gICAgaWYgKG1lbWJlcikge1xuICAgICAgdGhpcy5pbml0TWVtYmVyKCk7XG4gICAgICB0aGlzLm1lbWJlci5uZXh0KG1lbWJlcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=