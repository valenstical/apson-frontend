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
        Cacheable(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RequestService.prototype, "searchSchools", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBQzdDO0lBSUUsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUV6QyxxQ0FBWTs7OztJQUFaLFVBQWEsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsdUJBQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsMkNBQWtCOzs7O0lBQWxCLFVBQW1CLElBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLHVCQUFPLElBQUksR0FBSSxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELHVDQUFjOzs7O0lBQWQsVUFBZSxJQUFTO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyx1QkFBTyxJQUFJLEdBQUksTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFDRCx1Q0FBYzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDdEIsa0JBQWtCLEVBQ2xCLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsRUFBRSxFQUMzQixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7O0lBR0Qsc0NBQWE7Ozs7SUFBYixVQUFjLEtBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHdDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBUTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsNkJBQUk7Ozs7O0lBQUosVUFBSyxRQUFnQixFQUFFLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLHVCQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCw4QkFBSzs7Ozs7SUFBTCxVQUFNLFFBQWdCLEVBQUUsSUFBUztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsdUJBQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUNELDRCQUFHOzs7OztJQUFILFVBQUksUUFBZ0IsRUFBRSxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQTNDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUhRLFdBQVc7OztJQTJCbEI7UUFEQyxTQUFTLEVBQUU7OztnREFDZSxVQUFVO3VEQUVwQzt5QkFoQ0g7Q0FnREMsQUE1Q0QsSUE0Q0M7U0F6Q1ksY0FBYzs7Ozs7O0lBQ2IsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlIH0gZnJvbSAnbmd4LWNhY2hlYWJsZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHt9XG5cbiAgdXBkYXRlTWVtYmVyKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdtZW1iZXJzJywgeyAuLi5kYXRhIH0sICdwYXRjaCcpO1xuICB9XG5cbiAgdXBkYXRlUHJvZmlsZUltYWdlKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdtZW1iZXJzL2ltYWdlJywgeyAuLi5kYXRhIH0sICdwYXRjaCcpO1xuICB9XG5cbiAgcmVnaXN0ZXJNZW1iZXIoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoJ21lbWJlcnMnLCB7IC4uLmRhdGEgfSwgJ3Bvc3QnKTtcbiAgfVxuICByZXF1ZXN0UGF5bWVudChwYXltZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoXG4gICAgICAncGF5bWVudHMvcmVxdWVzdCcsXG4gICAgICB7IHBhcmFtczogeyBwYXltZW50VHlwZSB9IH0sXG4gICAgICAnZ2V0JyxcbiAgICApO1xuICB9XG5cbiAgQENhY2hlYWJsZSgpXG4gIHNlYXJjaFNjaG9vbHMocXVlcnk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCdzY2hvb2xzJywgcXVlcnkpO1xuICB9XG5cbiAgdmFsaWRhdGVQYXltZW50KHJlZjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoJ3BheW1lbnRzJywgeyByZWYgfSwgJ3Bvc3QnKTtcbiAgfVxuXG4gIHBvc3QoZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgLi4uZGF0YSB9LCAncG9zdCcpO1xuICB9XG5cbiAgcGF0Y2goZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgLi4uZGF0YSB9LCAncGF0Y2gnKTtcbiAgfVxuICBnZXQoZW5kcG9pbnQ6IHN0cmluZywgZGF0YSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZW5kcG9pbnQsIHsgcGFyYW1zOiBkYXRhIH0sICdnZXQnKTtcbiAgfVxufVxuIl19