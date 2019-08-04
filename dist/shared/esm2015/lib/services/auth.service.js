/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { MEMBERS_URL, VISITORS_URL, STUDENTS_URL, ADMIN_URL } from 'helpers';
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
        this.url = MEMBERS_URL;
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
        location.assign(MEMBERS_URL);
    }
    /**
     * @return {?}
     */
    gotoVisitors() {
        location.assign(VISITORS_URL);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUs3RSxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFHdEIsWUFBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURwRSxRQUFHLEdBQUcsV0FBVyxDQUFDO0lBQ3FELENBQUM7Ozs7O0lBRXhFLEtBQUssQ0FBQyxJQUFTO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLG9CQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFNBQVM7O2NBQ0QsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztjQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxNQUFNO1lBQ04sV0FBVzs7Ozs7SUFPbEIsNkJBQXdCOztJQUN4QiwwQkFBa0I7Ozs7O0lBQ04sNkJBQXNCOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJy4uL21vZGVscy9tZW1iZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTUVNQkVSU19VUkwsIFZJU0lUT1JTX1VSTCwgU1RVREVOVFNfVVJMLCBBRE1JTl9VUkwgfSBmcm9tICdoZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgbWVtYmVyOiBTdWJqZWN0PE1lbWJlcj47XG4gIHVybCA9IE1FTUJFUlNfVVJMO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cblxuICBsb2dpbihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnJlcXVlc3QoJ21lbWJlcnMvbG9naW4nLCB7IC4uLmRhdGEgfSwgJ3Bvc3QnKTtcbiAgfVxuXG4gIHNldE1lbWJlcihtZW1iZXI6IE1lbWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5pdE1lbWJlcigpO1xuICAgIHRoaXMubWVtYmVyLm5leHQobWVtYmVyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVtYmVyJywgSlNPTi5zdHJpbmdpZnkobWVtYmVyKSk7XG4gIH1cblxuICBnZXRNZW1iZXIoKTogTWVtYmVyIHtcbiAgICBjb25zdCBtZW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyJyk7XG4gICAgaWYgKG1lbWJlcikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobWVtYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5tZW1iZXIgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtZW1iZXInKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE1lbWJlcigpIHtcbiAgICBpZiAoIXRoaXMubWVtYmVyKSB7XG4gICAgICB0aGlzLm1lbWJlciA9IG5ldyBTdWJqZWN0PE1lbWJlcj4oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ290b01lbWJlcnMoKSB7XG4gICAgbG9jYXRpb24uYXNzaWduKE1FTUJFUlNfVVJMKTtcbiAgfVxuXG4gIHB1YmxpYyBnb3RvVmlzaXRvcnMoKSB7XG4gICAgbG9jYXRpb24uYXNzaWduKFZJU0lUT1JTX1VSTCk7XG4gIH1cblxuICBwdWJsaWMgZ290b1N0dWRlbnRzKCkge1xuICAgIGxvY2F0aW9uLmFzc2lnbihTVFVERU5UU19VUkwpO1xuICB9XG5cbiAgcHVibGljIGdvdG9BZG1pbigpIHtcbiAgICBsb2NhdGlvbi5hc3NpZ24oQURNSU5fVVJMKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4odXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICBjb25zdCBtZW1iZXIgPSB0aGlzLmdldE1lbWJlcigpO1xuICAgIGlmIChtZW1iZXIpIHtcbiAgICAgIHRoaXMuaW5pdE1lbWJlcigpO1xuICAgICAgdGhpcy5tZW1iZXIubmV4dChtZW1iZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19