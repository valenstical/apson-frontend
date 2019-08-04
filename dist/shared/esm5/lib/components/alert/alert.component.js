/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-alert',
                    template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
                }] }
    ];
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        message: [{ type: Input }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQUFBO1FBS1csU0FBSSxHQUFHLFNBQVMsQ0FBQztJQU01QixDQUFDOzs7O0lBSEMsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwUUFBcUM7aUJBQ3RDOzs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBSVIscUJBQUM7Q0FBQSxBQVhELElBV0M7U0FQWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHR5cGUgPSAnd2FybmluZyc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPjtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlID0gQXJyYXkuaXNBcnJheSh0aGlzLm1lc3NhZ2UpID8gdGhpcy5tZXNzYWdlIDogW3RoaXMubWVzc2FnZV07XG4gIH1cbn1cbiJdfQ==