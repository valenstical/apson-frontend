/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var SchoolService = /** @class */ (function () {
    function SchoolService() {
        this.school = new BehaviorSubject(null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    SchoolService.prototype.setValue = /**
     * @param {?} school
     * @return {?}
     */
    function (school) {
        this.school.next(school);
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.school;
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.school.getValue();
    };
    SchoolService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SchoolService.ctorParameters = function () { return []; };
    /** @nocollapse */ SchoolService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });
    return SchoolService;
}());
export { SchoolService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchoolService.prototype.school;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Nob29sLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdkM7SUFNRTtRQUZRLFdBQU0sR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckQsQ0FBQzs7Ozs7SUFFaEIsZ0NBQVE7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDJCQUFHOzs7SUFBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFORDtDQXVCQyxBQW5CRCxJQW1CQztTQWhCWSxhQUFhOzs7Ozs7SUFDeEIsK0JBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nob29sIH0gZnJvbSAnLi4vbW9kZWxzL3NjaG9vbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNjaG9vbFNlcnZpY2Uge1xuICBwcml2YXRlIHNjaG9vbDogQmVoYXZpb3JTdWJqZWN0PFNjaG9vbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRWYWx1ZShzY2hvb2w6IFNjaG9vbCkge1xuICAgIHRoaXMuc2Nob29sLm5leHQoc2Nob29sKTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hvb2w7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hvb2wuZ2V0VmFsdWUoKTtcbiAgfVxufVxuIl19