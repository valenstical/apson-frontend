/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaystackWidget = /** @class */ (function () {
    function PaystackWidget(_a, onSuccess, onFailure) {
        var key = _a.key, ref = _a.ref, plan = _a.plan, email = _a.email;
        this.handler = PaystackPop.setup({
            key: key,
            email: email,
            ref: ref,
            plan: plan,
            callback: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                onSuccess(response);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                onFailure();
            }),
        });
    }
    /**
     * @return {?}
     */
    PaystackWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.handler.openIframe();
    };
    return PaystackWidget;
}());
export { PaystackWidget };
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5c3RhY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3BheXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtJQUVFLHdCQUFZLEVBQXlCLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFBN0MsWUFBRyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUs7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9CLEdBQUcsS0FBQTtZQUNILEtBQUssT0FBQTtZQUNMLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLFFBQVE7Ozs7WUFBRSxVQUFTLFFBQVE7Z0JBQ3pCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUE7WUFDRCxPQUFPOzs7WUFBRTtnQkFDUCxTQUFTLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFDRCw2QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7Ozs7SUFsQkMsaUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBQYXlzdGFja1BvcDtcbmV4cG9ydCBjbGFzcyBQYXlzdGFja1dpZGdldCB7XG4gIGhhbmRsZXI6IGFueTtcbiAgY29uc3RydWN0b3IoeyBrZXksIHJlZiwgcGxhbiwgZW1haWwgfSwgb25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBQYXlzdGFja1BvcC5zZXR1cCh7XG4gICAgICBrZXksXG4gICAgICBlbWFpbCxcbiAgICAgIHJlZixcbiAgICAgIHBsYW4sXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgb25GYWlsdXJlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5oYW5kbGVyLm9wZW5JZnJhbWUoKTtcbiAgfVxufVxuIl19