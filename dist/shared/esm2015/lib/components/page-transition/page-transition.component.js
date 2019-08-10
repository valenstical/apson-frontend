/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, } from '@angular/router';
import { BaseComponent } from '../base-component';
export class PageTransitionComponent extends BaseComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        super();
        this.router = router;
        this.activeChange = new EventEmitter();
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            BaseComponent.showMenu = false;
            if (event instanceof RouteConfigLoadStart) {
                this.loading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                this.loading = false;
            }
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PageTransitionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-page-transition',
                template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n"
            }] }
];
/** @nocollapse */
PageTransitionComponent.ctorParameters = () => [
    { type: Router }
];
PageTransitionComponent.propDecorators = {
    activeChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2UtdHJhbnNpdGlvbi9wYWdlLXRyYW5zaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFFTixvQkFBb0IsRUFDcEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTWxELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxhQUFhOzs7O0lBTXhELFlBQW9CLE1BQWM7UUFDaEMsS0FBSyxFQUFFLENBQUM7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSnhCLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkUsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUloQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQzFCLENBQUMsS0FBa0IsRUFBUSxFQUFFO1lBQzNCLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksS0FBSyxZQUFZLG9CQUFvQixFQUFFO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLEtBQUssWUFBWSxrQkFBa0IsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMk1BQStDO2FBQ2hEOzs7O1lBVkMsTUFBTTs7OzJCQWFMLE1BQU07Ozs7SUFBUCwrQ0FBbUU7O0lBRW5FLDBDQUFnQjs7Ozs7SUFFSix5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxuICBSb3V0ZUNvbmZpZ0xvYWRTdGFydCxcbiAgUm91dGVDb25maWdMb2FkRW5kLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBhZ2UtdHJhbnNpdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXRyYW5zaXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlVHJhbnNpdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQ6IFJvdXRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgQmFzZUNvbXBvbmVudC5zaG93TWVudSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==