/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    request(endpoint, params, method) {
        return this.http[method](`${BASE_URL}/${endpoint}`, params);
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7O0FBS25DLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7Ozs7OztJQUV4QyxPQUFPLENBQ0wsUUFBZ0IsRUFDaEIsTUFBVyxFQUNYLE1BQWM7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLElBQUksUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsVUFBVTs7Ozs7Ozs7SUFPTCwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdoZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHJlcXVlc3Q8VD4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgKTogT2JzZXJ2YWJsZTxUPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2RdKGAke0JBU0VfVVJMfS8ke2VuZHBvaW50fWAsIHBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==