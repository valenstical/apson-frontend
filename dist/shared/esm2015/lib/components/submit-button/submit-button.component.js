/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SubmitButtonComponent {
    constructor() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    }
}
SubmitButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-submit-button',
                template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
            }] }
];
/** @nocollapse */
SubmitButtonComponent.ctorParameters = () => [];
SubmitButtonComponent.propDecorators = {
    isBusy: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    maxWidth: [{ type: Input }],
    btnClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9FLE1BQU0sT0FBTyxxQkFBcUI7SUFPaEM7UUFOUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbEIsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscVBBQTZDO2FBQzlDOzs7OztxQkFFRSxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7OztJQUxQLHVDQUF3Qjs7SUFDeEIscUNBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLHFDQUF5Qjs7SUFDekIseUNBQTRCOztJQUM1Qix5Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWJtaXQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Ym1pdC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc0J1c3kgPSBmYWxzZTtcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZSA9ICdzdWJtaXQnO1xuICBASW5wdXQoKSBtYXhXaWR0aCA9ICd3LTEwMCc7XG4gIEBPdXRwdXQoKSBidG5DbGljaz86IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25DbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIHRoaXMuYnRuQ2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=