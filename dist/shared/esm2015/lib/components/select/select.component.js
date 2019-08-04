/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SelectComponent {
    constructor() {
        this.data = [];
        this.disabled = false;
        this.isLoading = false;
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    notifyChange(event) {
        this.whenSelected.emit(event);
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-select',
                template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\">{{ title }}\n    <img *ngIf=\"isLoading\" src=\"/assets/images/icons/loading.gif\" width=\"20\" /></label>\n  <select class=\"form-control custom-select\" [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\" (change)=\"notifyChange(formData.controls[name].value)\"\n    [attr.disabled]=\"disabled || isLoading ? 'true' : null\">\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n      {{ item }}</option>\n  </select>\n  <span class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\">{{ invalidText }}.</span>\n</div>"
            }] }
];
SelectComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    data: [{ type: Input }],
    formData: [{ type: Input }],
    invalidText: [{ type: Input }],
    disabled: [{ type: Input }],
    isLoading: [{ type: Input }],
    whenSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.name;
    /** @type {?} */
    SelectComponent.prototype.title;
    /** @type {?} */
    SelectComponent.prototype.data;
    /** @type {?} */
    SelectComponent.prototype.formData;
    /** @type {?} */
    SelectComponent.prototype.invalidText;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.isLoading;
    /** @type {?} */
    SelectComponent.prototype.whenSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQU9XLFNBQUksR0FBRyxFQUFFLENBQUM7UUFHVixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt2RSxDQUFDOzs7OztJQUhDLFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHl1QkFBc0M7YUFDdkM7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFQUCwrQkFBc0I7O0lBQ3RCLGdDQUF3Qjs7SUFDeEIsK0JBQW1COztJQUNuQixtQ0FBNkI7O0lBQzdCLHNDQUE4Qjs7SUFDOUIsbUNBQTBCOztJQUMxQixvQ0FBMkI7O0lBQzNCLHVDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xuICBASW5wdXQoKSBmb3JtRGF0YTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBpbnZhbGlkVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNMb2FkaW5nID0gZmFsc2U7XG4gIEBPdXRwdXQoKSB3aGVuU2VsZWN0ZWQ/OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG5vdGlmeUNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy53aGVuU2VsZWN0ZWQuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==