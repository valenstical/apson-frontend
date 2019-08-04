/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class AlertComponent {
    constructor() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    }
}
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
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU16RCxNQUFNLE9BQU8sY0FBYztJQUozQjtRQUtXLFNBQUksR0FBRyxTQUFTLENBQUM7SUFNNUIsQ0FBQzs7OztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDBRQUFxQzthQUN0Qzs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBRk4sOEJBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHR5cGUgPSAnd2FybmluZyc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPjtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlID0gQXJyYXkuaXNBcnJheSh0aGlzLm1lc3NhZ2UpID8gdGhpcy5tZXNzYWdlIDogW3RoaXMubWVzc2FnZV07XG4gIH1cbn1cbiJdfQ==