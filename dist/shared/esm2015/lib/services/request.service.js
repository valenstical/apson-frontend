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
export class RequestService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateMember(data) {
        return this.http.request('members', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfileImage(data) {
        return this.http.request('members/image', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    registerMember(data) {
        return this.http.request('members', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} paymentType
     * @return {?}
     */
    requestPayment(paymentType) {
        return this.http.request('payments/request', { params: { paymentType } }, 'get');
    }
    /**
     * @param {?} query
     * @return {?}
     */
    searchSchools(query) {
        return this.get('schools', query);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSchool(id) {
        return this.get(`schools/${id}`);
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    validatePayment(ref) {
        return this.http.request('payments', { ref }, 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    post(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    patch(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    get(endpoint, data = {}) {
        return this.http.request(endpoint, { params: data }, 'get');
    }
}
RequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RequestService.ctorParameters = () => [
    { type: HttpService }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    RequestService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSTdDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUV6QyxZQUFZLENBQUMsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsb0JBQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsSUFBUztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsb0JBQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQVM7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLG9CQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxXQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUN0QixrQkFBa0IsRUFDbEIsRUFBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUMzQixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsYUFBYSxDQUFDLEtBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUtELFNBQVMsQ0FBQyxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBUTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxRQUFnQixFQUFFLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLG9CQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsUUFBZ0IsRUFBRSxJQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxvQkFBTyxJQUFJLEdBQUksT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBQ0QsR0FBRyxDQUFDLFFBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUhRLFdBQVc7OztBQTZCbEI7SUFIQyxTQUFTLENBQUM7UUFDVCxhQUFhLEVBQUUsSUFBSTtLQUNwQixDQUFDOzs7NENBQ3lCLFVBQVU7bURBRXBDO0FBS0Q7SUFIQyxTQUFTLENBQUM7UUFDVCxhQUFhLEVBQUUsSUFBSTtLQUNwQixDQUFDOzs7NENBQ3FCLFVBQVU7K0NBRWhDOzs7Ozs7SUFqQ1csOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlIH0gZnJvbSAnbmd4LWNhY2hlYWJsZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHt9XG5cbiAgdXBkYXRlTWVtYmVyKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdtZW1iZXJzJywgeyAuLi5kYXRhIH0sICdwYXRjaCcpO1xuICB9XG5cbiAgdXBkYXRlUHJvZmlsZUltYWdlKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdtZW1iZXJzL2ltYWdlJywgeyAuLi5kYXRhIH0sICdwYXRjaCcpO1xuICB9XG5cbiAgcmVnaXN0ZXJNZW1iZXIoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoJ21lbWJlcnMnLCB7IC4uLmRhdGEgfSwgJ3Bvc3QnKTtcbiAgfVxuICByZXF1ZXN0UGF5bWVudChwYXltZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoXG4gICAgICAncGF5bWVudHMvcmVxdWVzdCcsXG4gICAgICB7IHBhcmFtczogeyBwYXltZW50VHlwZSB9IH0sXG4gICAgICAnZ2V0JyxcbiAgICApO1xuICB9XG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMTAwMCxcbiAgfSlcbiAgc2VhcmNoU2Nob29scyhxdWVyeTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJ3NjaG9vbHMnLCBxdWVyeSk7XG4gIH1cblxuICBAQ2FjaGVhYmxlKHtcbiAgICBtYXhDYWNoZUNvdW50OiAxMDAwLFxuICB9KVxuICBnZXRTY2hvb2woaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGBzY2hvb2xzLyR7aWR9YCk7XG4gIH1cblxuICB2YWxpZGF0ZVBheW1lbnQocmVmOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdCgncGF5bWVudHMnLCB7IHJlZiB9LCAncG9zdCcpO1xuICB9XG5cbiAgcG9zdChlbmRwb2ludDogc3RyaW5nLCBkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChlbmRwb2ludCwgeyAuLi5kYXRhIH0sICdwb3N0Jyk7XG4gIH1cblxuICBwYXRjaChlbmRwb2ludDogc3RyaW5nLCBkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChlbmRwb2ludCwgeyAuLi5kYXRhIH0sICdwYXRjaCcpO1xuICB9XG4gIGdldChlbmRwb2ludDogc3RyaW5nLCBkYXRhID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChlbmRwb2ludCwgeyBwYXJhbXM6IGRhdGEgfSwgJ2dldCcpO1xuICB9XG59XG4iXX0=