/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SubmitButtonComponent = /** @class */ (function () {
    function SubmitButtonComponent() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SubmitButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    SubmitButtonComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    };
    SubmitButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-submit-button',
                    template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    SubmitButtonComponent.ctorParameters = function () { return []; };
    SubmitButtonComponent.propDecorators = {
        isBusy: [{ type: Input }],
        text: [{ type: Input }],
        disabled: [{ type: Input }],
        type: [{ type: Input }],
        maxWidth: [{ type: Input }],
        btnClick: [{ type: Output }]
    };
    return SubmitButtonComponent;
}());
export { SubmitButtonComponent };
if (false) {
    /** @type {?} */
    SubmitButtonComponent.prototype.isBusy;
    /** @type {?} */
    SubmitButtonComponent.prototype.text;
    /** @type {?} */
    SubmitButtonComponent.prototype.disabled;
    /** @type {?} */
    SubmitButtonComponent.prototype.type;
    /** @type {?} */
    SubmitButtonComponent.prototype.maxWidth;
    /** @type {?} */
    SubmitButtonComponent.prototype.btnClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBV0U7UUFOUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbEIsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFaEIsd0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYix1Q0FBTzs7OztJQUFQLFVBQVEsS0FBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxUEFBNkM7aUJBQzlDOzs7Ozt5QkFFRSxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7SUFVVCw0QkFBQztDQUFBLEFBcEJELElBb0JDO1NBaEJZLHFCQUFxQjs7O0lBQ2hDLHVDQUF3Qjs7SUFDeEIscUNBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLHFDQUF5Qjs7SUFDekIseUNBQTRCOztJQUM1Qix5Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWJtaXQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Ym1pdC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc0J1c3kgPSBmYWxzZTtcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZSA9ICdzdWJtaXQnO1xuICBASW5wdXQoKSBtYXhXaWR0aCA9ICd3LTEwMCc7XG4gIEBPdXRwdXQoKSBidG5DbGljaz86IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25DbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIHRoaXMuYnRuQ2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=