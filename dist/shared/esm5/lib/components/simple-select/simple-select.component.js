/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SimpleSelectComponent = /** @class */ (function () {
    function SimpleSelectComponent() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SimpleSelectComponent.prototype.notifyChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.whenSelected.emit(value);
    };
    SimpleSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-simple-select',
                    template: "<select\n  class=\"form-control custom-select\"\n  [value]=\"defaultValue\"\n  (change)=\"notifyChange($event.target.value)\"\n>\n  <option value=\"\">{{ placeholder }}</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option\n  >\n</select>\n"
                }] }
    ];
    SimpleSelectComponent.propDecorators = {
        data: [{ type: Input }],
        placeholder: [{ type: Input }],
        defaultValue: [{ type: Input }],
        whenSelected: [{ type: Output }]
    };
    return SimpleSelectComponent;
}());
export { SimpleSelectComponent };
if (false) {
    /** @type {?} */
    SimpleSelectComponent.prototype.data;
    /** @type {?} */
    SimpleSelectComponent.prototype.placeholder;
    /** @type {?} */
    SimpleSelectComponent.prototype.defaultValue;
    /** @type {?} */
    SimpleSelectComponent.prototype.whenSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0L3NpbXBsZS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUFLVyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFDM0IsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt2RSxDQUFDOzs7OztJQUhDLDRDQUFZOzs7O0lBQVosVUFBYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixnVEFBNkM7aUJBQzlDOzs7dUJBRUUsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsTUFBTTs7SUFLVCw0QkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLHFCQUFxQjs7O0lBQ2hDLHFDQUFtQjs7SUFDbkIsNENBQW9DOztJQUNwQyw2Q0FBMkI7O0lBQzNCLDZDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaW1wbGUtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVTZWxlY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhID0gW107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ0Nob29zZSBvbmUnO1xuICBASW5wdXQoKSBkZWZhdWx0VmFsdWUgPSAnJztcbiAgQE91dHB1dCgpIHdoZW5TZWxlY3RlZD86IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbm90aWZ5Q2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLndoZW5TZWxlY3RlZC5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19