/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class InputComponent {
    constructor() {
        this.type = 'text';
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-input',
                template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <input\n    type=\"{{ type }}\"\n    class=\"form-control\"\n    id=\"{{ name }}\"\n    [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\"\n  />\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
            }] }
];
InputComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    type: [{ type: Input }],
    formData: [{ type: Input }],
    invalidText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.name;
    /** @type {?} */
    InputComponent.prototype.title;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.formData;
    /** @type {?} */
    InputComponent.prototype.invalidText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsTUFBTSxPQUFPLGNBQWM7SUFKM0I7UUFPVyxTQUFJLEdBQUcsTUFBTSxDQUFDO0lBR3pCLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb2JBQXFDO2FBQ3RDOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBSk4sOEJBQXNCOztJQUN0QiwrQkFBd0I7O0lBQ3hCLDhCQUF1Qjs7SUFDdkIsa0NBQTZCOztJQUM3QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgZm9ybURhdGE6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgaW52YWxpZFRleHQ/OiBzdHJpbmc7XG59XG4iXX0=