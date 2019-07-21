/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    BackButtonComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    BackButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-back-button',
                    template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
                }] }
    ];
    /** @nocollapse */
    BackButtonComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    return BackButtonComponent;
}());
export { BackButtonComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BackButtonComponent.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQUtFLDZCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7OztJQUUxQyxvQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwrSkFBMkM7aUJBQzVDOzs7O2dCQUxRLFFBQVE7O0lBWWpCLDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTlksbUJBQW1COzs7Ozs7SUFDbEIsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1iYWNrLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge31cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==