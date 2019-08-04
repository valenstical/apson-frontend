/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SchoolService {
    constructor() {
        this.school = new BehaviorSubject(null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    setValue(school) {
        this.school.next(school);
    }
    /**
     * @return {?}
     */
    get() {
        return this.school;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.school.getValue();
    }
}
SchoolService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SchoolService.ctorParameters = () => [];
/** @nocollapse */ SchoolService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchoolService.prototype.school;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Nob29sLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLGFBQWE7SUFHeEI7UUFGUSxXQUFNLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJELENBQUM7Ozs7O0lBRWhCLFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQWxCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFFQywrQkFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hvb2wgfSBmcm9tICcuLi9tb2RlbHMvc2Nob29sJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2Nob29sU2VydmljZSB7XG4gIHByaXZhdGUgc2Nob29sOiBCZWhhdmlvclN1YmplY3Q8U2Nob29sPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldFZhbHVlKHNjaG9vbDogU2Nob29sKSB7XG4gICAgdGhpcy5zY2hvb2wubmV4dChzY2hvb2wpO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnNjaG9vbDtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNjaG9vbC5nZXRWYWx1ZSgpO1xuICB9XG59XG4iXX0=