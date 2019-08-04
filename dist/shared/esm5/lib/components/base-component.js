/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from 'rxjs';
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.subscription = new Subscription();
        this.isBusy = false;
        this.isEmpty = false;
        this.isError = false;
        this.loading = true;
        this.hideAlert = true;
        this.show404 = true;
        this.response = {
            title: '',
            message: [],
            type: '',
        };
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    BaseComponent.prototype.toggleLoaders = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isBusy = value;
        this.hideAlert = value;
    };
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    BaseComponent.prototype.showMessage = /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    function (message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    };
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    BaseComponent.prototype.arrayValues = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        if (!Array.isArray(array)) {
            return [];
        }
        /** @type {?} */
        var errorGroup = [];
        array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            errorGroup.push(Object.values(element));
        }));
        return errorGroup;
    };
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    BaseComponent.prototype.handleError = /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.toggleLoaders(false);
        var _a = err.error, data = _a.data, message = _a.message;
        data = this.arrayValues(data);
        /** @type {?} */
        var title = data.length === 0 ? '' : message;
        message = title ? data : message;
        this.showMessage(message, title, 'danger');
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () { };
    return BaseComponent;
}());
export { BaseComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.subscription;
    /** @type {?} */
    BaseComponent.prototype.isBusy;
    /** @type {?} */
    BaseComponent.prototype.isEmpty;
    /** @type {?} */
    BaseComponent.prototype.isError;
    /** @type {?} */
    BaseComponent.prototype.loading;
    /** @type {?} */
    BaseComponent.prototype.hideAlert;
    /** @type {?} */
    BaseComponent.prototype.show404;
    /** @type {?} */
    BaseComponent.prototype.response;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdwQztJQWFFO1FBWlUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRztZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUFDYSxDQUFDOzs7Ozs7SUFFTixxQ0FBYTs7Ozs7SUFBdkIsVUFBd0IsS0FBYztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUNTLG1DQUFXOzs7Ozs7O0lBQXJCLFVBQXNCLE9BQVksRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFTyxtQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNLLFVBQVUsR0FBRyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFZO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRVMsbUNBQVc7Ozs7O0lBQXJCLFVBQXNCLEdBQVE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFBLGNBQXdCLEVBQWYsY0FBSSxFQUFFLG9CQUFTO1FBRTFCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTztRQUM5QyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNELGtDQUFVOzs7SUFBVixjQUFjLENBQUM7SUFDakIsb0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDOzs7Ozs7O0lBakRDLHFDQUE0Qzs7SUFDNUMsK0JBQWU7O0lBQ2YsZ0NBQWdCOztJQUNoQixnQ0FBZ0I7O0lBQ2hCLGdDQUFlOztJQUNmLGtDQUFpQjs7SUFDakIsZ0NBQWU7O0lBQ2YsaUNBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGlzQnVzeSA9IGZhbHNlO1xuICBpc0VtcHR5ID0gZmFsc2U7XG4gIGlzRXJyb3IgPSBmYWxzZTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIGhpZGVBbGVydCA9IHRydWU7XG4gIHNob3c0MDQgPSB0cnVlO1xuICByZXNwb25zZSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgbWVzc2FnZTogW10sXG4gICAgdHlwZTogJycsXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcm90ZWN0ZWQgdG9nZ2xlTG9hZGVycyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNCdXN5ID0gdmFsdWU7XG4gICAgdGhpcy5oaWRlQWxlcnQgPSB2YWx1ZTtcbiAgfVxuICBwcm90ZWN0ZWQgc2hvd01lc3NhZ2UobWVzc2FnZTogYW55LCB0aXRsZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3BvbnNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucmVzcG9uc2UudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnJlc3BvbnNlLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBhcnJheVZhbHVlcyhhcnJheTogYW55KTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBlcnJvckdyb3VwID0gW107XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICBlcnJvckdyb3VwLnB1c2goT2JqZWN0LnZhbHVlcyhlbGVtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVycm9yR3JvdXA7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZUxvYWRlcnMoZmFsc2UpO1xuICAgIGxldCB7XG4gICAgICBlcnJvcjogeyBkYXRhLCBtZXNzYWdlIH0sXG4gICAgfSA9IGVycjtcbiAgICBkYXRhID0gdGhpcy5hcnJheVZhbHVlcyhkYXRhKTtcbiAgICBjb25zdCB0aXRsZSA9IGRhdGEubGVuZ3RoID09PSAwID8gJycgOiBtZXNzYWdlO1xuICAgIG1lc3NhZ2UgPSB0aXRsZSA/IGRhdGEgOiBtZXNzYWdlO1xuICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZSwgdGl0bGUsICdkYW5nZXInKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG4gIHRvZ2dsZU1lbnUoKSB7fVxufVxuIl19