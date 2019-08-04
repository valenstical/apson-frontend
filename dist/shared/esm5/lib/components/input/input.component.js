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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFBQTtRQU9XLFNBQUksR0FBRyxNQUFNLENBQUM7SUFHekIsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixvYkFBcUM7aUJBQ3RDOzs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQUNSLHFCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTlksY0FBYzs7O0lBQ3pCLDhCQUFzQjs7SUFDdEIsK0JBQXdCOztJQUN4Qiw4QkFBdUI7O0lBQ3ZCLGtDQUE2Qjs7SUFDN0IscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGZvcm1EYXRhOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGludmFsaWRUZXh0Pzogc3RyaW5nO1xufVxuIl19