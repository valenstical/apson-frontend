/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.type = 'text';
    }
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-input',
                    template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <ng-container *ngIf=\"type === 'textarea'; else textfield\">\n    <textarea\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      >{{ formData.controls[name].value }}\n</textarea\n    >\n  </ng-container>\n  <ng-template #textfield>\n    <input\n      type=\"{{ type }}\"\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      [value]=\"formData.controls[name].value\"\n    />\n  </ng-template>\n\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
                }] }
    ];
    InputComponent.propDecorators = {
        name: [{ type: Input }],
        title: [{ type: Input }],
        type: [{ type: Input }],
        formData: [{ type: Input }],
        invalidText: [{ type: Input }]
    };
    return InputComponent;
}());
export { InputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFBQTtRQU9XLFNBQUksR0FBRyxNQUFNLENBQUM7SUFHekIsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwydkJBQXFDO2lCQUN0Qzs7O3VCQUVFLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFDUixxQkFBQztDQUFBLEFBVkQsSUFVQztTQU5ZLGNBQWM7OztJQUN6Qiw4QkFBc0I7O0lBQ3RCLCtCQUF3Qjs7SUFDeEIsOEJBQXVCOztJQUN2QixrQ0FBNkI7O0lBQzdCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBmb3JtRGF0YTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBpbnZhbGlkVGV4dD86IHN0cmluZztcbn1cbiJdfQ==