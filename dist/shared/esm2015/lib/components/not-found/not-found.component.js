/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class NotFoundComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.icon = 'assets/images/icons/empty.svg';
    }
}
NotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-not-found-box',
                template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NotFoundComponent.ctorParameters = () => [
    { type: Router }
];
NotFoundComponent.propDecorators = {
    icon: [{ type: Input }],
    message: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NotFoundComponent.prototype.icon;
    /** @type {?} */
    NotFoundComponent.prototype.message;
    /** @type {?} */
    NotFoundComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    NotFoundComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNekMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUs1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp6QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFJWCxDQUFDOzs7WUFUdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGdZQUF5QzthQUMxQzs7OztZQUxRLE1BQU07OzttQkFPWixLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUZOLGlDQUFnRDs7SUFDaEQsb0NBQTBCOztJQUMxQixrQ0FBd0I7Ozs7O0lBRVosbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5vdC1mb3VuZC1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90LWZvdW5kLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRDb21wb25lbnQge1xuICBASW5wdXQoKSBpY29uID0gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1wdHkuc3ZnJztcbiAgQElucHV0KCkgbWVzc2FnZT86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbn1cbiJdfQ==