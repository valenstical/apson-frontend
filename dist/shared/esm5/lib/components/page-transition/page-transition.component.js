/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, } from '@angular/router';
import { BaseComponent } from '../base-component';
var PageTransitionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageTransitionComponent, _super);
    function PageTransitionComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activeChange = new EventEmitter();
        _this.loading = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            BaseComponent.showMenu = false;
            if (event instanceof RouteConfigLoadStart) {
                _this.loading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                _this.loading = false;
            }
        })));
    };
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    PageTransitionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-page-transition',
                    template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    PageTransitionComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    PageTransitionComponent.propDecorators = {
        activeChange: [{ type: Output }]
    };
    return PageTransitionComponent;
}(BaseComponent));
export { PageTransitionComponent };
if (false) {
    /** @type {?} */
    PageTransitionComponent.prototype.activeChange;
    /** @type {?} */
    PageTransitionComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    PageTransitionComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2UtdHJhbnNpdGlvbi9wYWdlLXRyYW5zaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxNQUFNLEVBRU4sb0JBQW9CLEVBQ3BCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDtJQUk2QyxtREFBYTtJQU14RCxpQ0FBb0IsTUFBYztRQUFsQyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUp4QixrQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBSWhCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQzFCLFVBQUMsS0FBa0I7WUFDakIsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxLQUFLLFlBQVksb0JBQW9CLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksS0FBSyxZQUFZLGtCQUFrQixFQUFFO2dCQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDJNQUErQztpQkFDaEQ7Ozs7Z0JBVkMsTUFBTTs7OytCQWFMLE1BQU07O0lBMEJULDhCQUFDO0NBQUEsQUFoQ0QsQ0FJNkMsYUFBYSxHQTRCekQ7U0E1QlksdUJBQXVCOzs7SUFFbEMsK0NBQW1FOztJQUVuRSwwQ0FBZ0I7Ozs7O0lBRUoseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGVyLFxuICBSb3V0ZXJFdmVudCxcbiAgUm91dGVDb25maWdMb2FkU3RhcnQsXG4gIFJvdXRlQ29uZmlnTG9hZEVuZCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYWdlLXRyYW5zaXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVRyYW5zaXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgYWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShcbiAgICAgICAgKGV2ZW50OiBSb3V0ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIEJhc2VDb21wb25lbnQuc2hvd01lbnUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=