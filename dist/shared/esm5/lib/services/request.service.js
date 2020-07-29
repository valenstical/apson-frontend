/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';
import { HttpService } from './http.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', tslib_1.__assign({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateProfileImage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members/image', tslib_1.__assign({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.registerMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', tslib_1.__assign({}, data), 'post');
    };
    /**
     * @param {?} paymentType
     * @return {?}
     */
    RequestService.prototype.requestPayment = /**
     * @param {?} paymentType
     * @return {?}
     */
    function (paymentType) {
        return this.http.request('payments/request', { params: { paymentType: paymentType } }, 'get');
    };
    /**
     * @param {?} query
     * @return {?}
     */
    RequestService.prototype.searchSchools = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.get('schools', query);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    RequestService.prototype.getSchool = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get("schools/" + id);
    };
    /**
     * @param {?} ref
     * @return {?}
     */
    RequestService.prototype.validatePayment = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        return this.http.request('payments', { ref: ref }, 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.post = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, tslib_1.__assign({}, data), 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.patch = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, tslib_1.__assign({}, data), 'patch');
    };
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    RequestService.prototype.get = /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.http.request(endpoint, { params: data }, 'get');
    };
    RequestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RequestService.ctorParameters = function () { return [
        { type: HttpService }
    ]; };
    /** @nocollapse */ RequestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequestService_Factory() { return new RequestService(i0.ɵɵinject(i1.HttpService)); }, token: RequestService, providedIn: "root" });
    tslib_1.__decorate([
        Cacheable({
            maxCacheCount: 1000,
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RequestService.prototype, "searchSchools", null);
    tslib_1.__decorate([
        Cacheable({
            maxCacheCount: 1000,
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RequestService.prototype, "getSchool", null);
    return RequestService;
}());
export { RequestService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RequestService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBQzdDO0lBSUUsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUV6QyxxQ0FBWTs7OztJQUFaLFVBQWEsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsdUJBQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsMkNBQWtCOzs7O0lBQWxCLFVBQW1CLElBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLHVCQUFPLElBQUksR0FBSSxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELHVDQUFjOzs7O0lBQWQsVUFBZSxJQUFTO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyx1QkFBTyxJQUFJLEdBQUksTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFDRCx1Q0FBYzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDdEIsa0JBQWtCLEVBQ2xCLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsRUFBRSxFQUMzQixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0Qsc0NBQWE7Ozs7SUFBYixVQUFjLEtBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUtELGtDQUFTOzs7O0lBQVQsVUFBVSxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFXLEVBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsd0NBQWU7Ozs7SUFBZixVQUFnQixHQUFRO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCw2QkFBSTs7Ozs7SUFBSixVQUFLLFFBQWdCLEVBQUUsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsdUJBQU8sSUFBSSxHQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVELDhCQUFLOzs7OztJQUFMLFVBQU0sUUFBZ0IsRUFBRSxJQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSx1QkFBTyxJQUFJLEdBQUksT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBQ0QsNEJBQUc7Ozs7O0lBQUgsVUFBSSxRQUFnQixFQUFFLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBcERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSFEsV0FBVzs7O0lBNkJsQjtRQUhDLFNBQVMsQ0FBQztZQUNULGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7OztnREFDeUIsVUFBVTt1REFFcEM7SUFLRDtRQUhDLFNBQVMsQ0FBQztZQUNULGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7OztnREFDcUIsVUFBVTttREFFaEM7eUJBekNIO0NBeURDLEFBckRELElBcURDO1NBbERZLGNBQWM7Ozs7OztJQUNiLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhY2hlYWJsZSB9IGZyb20gJ25neC1jYWNoZWFibGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7fVxuXG4gIHVwZGF0ZU1lbWJlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdCgnbWVtYmVycycsIHsgLi4uZGF0YSB9LCAncGF0Y2gnKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGVJbWFnZShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdCgnbWVtYmVycy9pbWFnZScsIHsgLi4uZGF0YSB9LCAncGF0Y2gnKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTWVtYmVyKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdtZW1iZXJzJywgeyAuLi5kYXRhIH0sICdwb3N0Jyk7XG4gIH1cbiAgcmVxdWVzdFBheW1lbnQocGF5bWVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KFxuICAgICAgJ3BheW1lbnRzL3JlcXVlc3QnLFxuICAgICAgeyBwYXJhbXM6IHsgcGF5bWVudFR5cGUgfSB9LFxuICAgICAgJ2dldCcsXG4gICAgKTtcbiAgfVxuXG4gIEBDYWNoZWFibGUoe1xuICAgIG1heENhY2hlQ291bnQ6IDEwMDAsXG4gIH0pXG4gIHNlYXJjaFNjaG9vbHMocXVlcnk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCdzY2hvb2xzJywgcXVlcnkpO1xuICB9XG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMTAwMCxcbiAgfSlcbiAgZ2V0U2Nob29sKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldChgc2Nob29scy8ke2lkfWApO1xuICB9XG5cbiAgdmFsaWRhdGVQYXltZW50KHJlZjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoJ3BheW1lbnRzJywgeyByZWYgfSwgJ3Bvc3QnKTtcbiAgfVxuXG4gIHBvc3QoZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgLi4uZGF0YSB9LCAncG9zdCcpO1xuICB9XG5cbiAgcGF0Y2goZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgLi4uZGF0YSB9LCAncGF0Y2gnKTtcbiAgfVxuICBnZXQoZW5kcG9pbnQ6IHN0cmluZywgZGF0YSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgcGFyYW1zOiBkYXRhIH0sICdnZXQnKTtcbiAgfVxufVxuIl19