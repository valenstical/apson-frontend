/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PaystackWidget {
    /**
     * @param {?} __0
     * @param {?} onSuccess
     * @param {?} onFailure
     */
    constructor({ key, ref, plan, email }, onSuccess, onFailure) {
        this.handler = PaystackPop.setup({
            key,
            email,
            ref,
            plan,
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
    open() {
        this.handler.openIframe();
    }
}
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5c3RhY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3BheXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBRXpCLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsR0FBRztZQUNILEtBQUs7WUFDTCxHQUFHO1lBQ0gsSUFBSTtZQUNKLFFBQVE7Ozs7WUFBRSxVQUFTLFFBQVE7Z0JBQ3pCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUE7WUFDRCxPQUFPOzs7WUFBRTtnQkFDUCxTQUFTLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQWxCQyxpQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIFBheXN0YWNrUG9wO1xuZXhwb3J0IGNsYXNzIFBheXN0YWNrV2lkZ2V0IHtcbiAgaGFuZGxlcjogYW55O1xuICBjb25zdHJ1Y3Rvcih7IGtleSwgcmVmLCBwbGFuLCBlbWFpbCB9LCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuICAgIHRoaXMuaGFuZGxlciA9IFBheXN0YWNrUG9wLnNldHVwKHtcbiAgICAgIGtleSxcbiAgICAgIGVtYWlsLFxuICAgICAgcmVmLFxuICAgICAgcGxhbixcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBvbkZhaWx1cmUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLmhhbmRsZXIub3BlbklmcmFtZSgpO1xuICB9XG59XG4iXX0=