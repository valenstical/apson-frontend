/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SimpleSelectComponent {
    constructor() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    notifyChange(value) {
        this.whenSelected.emit(value);
    }
}
SimpleSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-simple-select',
                template: "<select class=\"form-control custom-select\" [value]=\"defaultValue\" (change)=\"notifyChange($event.target.value)\">\n  <option value=\"\">-- {{placeholder}} --</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option>\n</select>"
            }] }
];
SimpleSelectComponent.propDecorators = {
    data: [{ type: Input }],
    placeholder: [{ type: Input }],
    defaultValue: [{ type: Input }],
    whenSelected: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0L3NpbXBsZS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXZFLE1BQU0sT0FBTyxxQkFBcUI7SUFKbEM7UUFLVyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFDM0IsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt2RSxDQUFDOzs7OztJQUhDLFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtU0FBNkM7YUFDOUM7OzttQkFFRSxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxNQUFNOzs7O0lBSFAscUNBQW1COztJQUNuQiw0Q0FBb0M7O0lBQ3BDLDZDQUEyQjs7SUFDM0IsNkNBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNpbXBsZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnQ2hvb3NlIG9uZSc7XG4gIEBJbnB1dCgpIGRlZmF1bHRWYWx1ZSA9ICcnO1xuICBAT3V0cHV0KCkgd2hlblNlbGVjdGVkPzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBub3RpZnlDaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIHRoaXMud2hlblNlbGVjdGVkLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=