/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
function (params) { });
var ɵ0 = defaultFunc;
/** @type {?} */
var styles = {
    palette: {
        window: '#FFFFFF',
        sourceBg: '#FBFBFB',
        windowBorder: '#00b09b',
        tabIcon: '#000000',
        inactiveTabIcon: '#0D2F5A',
        menuIcons: '#555a5f',
        link: '#00b09b',
        action: '#339933',
        inProgress: '#0433ff',
        complete: '#339933',
        error: '#cc0000',
        textDark: '#000000',
        textLight: '#FFFFFF',
    },
};
var CloudinaryWidget = /** @class */ (function () {
    function CloudinaryWidget(handleSuccess, handleFailure, ratio, preset, cropping) {
        if (handleSuccess === void 0) { handleSuccess = defaultFunc; }
        if (handleFailure === void 0) { handleFailure = defaultFunc; }
        if (ratio === void 0) { ratio = 1; }
        if (preset === void 0) { preset = 'profile'; }
        if (cropping === void 0) { cropping = true; }
        this.widget = window.cloudinary.createUploadWidget({
            cloudName: 'dvnrltpfi',
            uploadPreset: preset,
            cropping: cropping,
            croppingAspectRatio: ratio,
            croppingDefaultSelectionRatio: 0.8,
            resourceType: 'image',
            clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
            maxImageWidth: 500,
            maxImageHeight: 500,
            multiple: false,
            styles: styles,
            buttonClass: 'd-none',
            sources: ['local', 'camera'],
        }, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        function (error, result) {
            if (!error && result && result.event === 'success') {
                return handleSuccess(result.info.secure_url);
            }
            handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    CloudinaryWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.widget.open();
    };
    return CloudinaryWidget;
}());
export { CloudinaryWidget };
if (false) {
    /** @type {?} */
    CloudinaryWidget.prototype.widget;
}
export default {};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBRU0sV0FBVzs7OztBQUFHLFVBQUEsTUFBTSxJQUFLLENBQUMsQ0FBQTs7O0lBQzFCLE1BQU0sR0FBRztJQUNiLE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLFNBQVM7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFNBQVM7S0FDckI7Q0FDRjtBQUVEO0lBRUUsMEJBQ0UsYUFBMkIsRUFDM0IsYUFBMkIsRUFDM0IsS0FBUyxFQUNULE1BQWtCLEVBQ2xCLFFBQWU7UUFKZiw4QkFBQSxFQUFBLDJCQUEyQjtRQUMzQiw4QkFBQSxFQUFBLDJCQUEyQjtRQUMzQixzQkFBQSxFQUFBLFNBQVM7UUFDVCx1QkFBQSxFQUFBLGtCQUFrQjtRQUNsQix5QkFBQSxFQUFBLGVBQWU7UUFFZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQ2hEO1lBQ0UsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsUUFBUSxVQUFBO1lBQ1IsbUJBQW1CLEVBQUUsS0FBSztZQUMxQiw2QkFBNkIsRUFBRSxHQUFHO1lBQ2xDLFlBQVksRUFBRSxPQUFPO1lBQ3JCLG9CQUFvQixFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ25ELGFBQWEsRUFBRSxHQUFHO1lBQ2xCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxRQUFBO1lBQ04sV0FBVyxFQUFFLFFBQVE7WUFDckIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUM3Qjs7Ozs7UUFDRCxVQUFDLEtBQUssRUFBRSxNQUFXO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUNsRCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUNELCtCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQzs7OztJQW5DQyxrQ0FBWTs7QUFxQ2QsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciB3aW5kb3c7XG5cbmNvbnN0IGRlZmF1bHRGdW5jID0gcGFyYW1zID0+IHt9O1xuY29uc3Qgc3R5bGVzID0ge1xuICBwYWxldHRlOiB7XG4gICAgd2luZG93OiAnI0ZGRkZGRicsXG4gICAgc291cmNlQmc6ICcjRkJGQkZCJyxcbiAgICB3aW5kb3dCb3JkZXI6ICcjMDBiMDliJyxcbiAgICB0YWJJY29uOiAnIzAwMDAwMCcsXG4gICAgaW5hY3RpdmVUYWJJY29uOiAnIzBEMkY1QScsXG4gICAgbWVudUljb25zOiAnIzU1NWE1ZicsXG4gICAgbGluazogJyMwMGIwOWInLFxuICAgIGFjdGlvbjogJyMzMzk5MzMnLFxuICAgIGluUHJvZ3Jlc3M6ICcjMDQzM2ZmJyxcbiAgICBjb21wbGV0ZTogJyMzMzk5MzMnLFxuICAgIGVycm9yOiAnI2NjMDAwMCcsXG4gICAgdGV4dERhcms6ICcjMDAwMDAwJyxcbiAgICB0ZXh0TGlnaHQ6ICcjRkZGRkZGJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5V2lkZ2V0IHtcbiAgd2lkZ2V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGhhbmRsZVN1Y2Nlc3MgPSBkZWZhdWx0RnVuYyxcbiAgICBoYW5kbGVGYWlsdXJlID0gZGVmYXVsdEZ1bmMsXG4gICAgcmF0aW8gPSAxLFxuICAgIHByZXNldCA9ICdwcm9maWxlJyxcbiAgICBjcm9wcGluZyA9IHRydWUsXG4gICkge1xuICAgIHRoaXMud2lkZ2V0ID0gd2luZG93LmNsb3VkaW5hcnkuY3JlYXRlVXBsb2FkV2lkZ2V0KFxuICAgICAge1xuICAgICAgICBjbG91ZE5hbWU6ICdkdm5ybHRwZmknLFxuICAgICAgICB1cGxvYWRQcmVzZXQ6IHByZXNldCxcbiAgICAgICAgY3JvcHBpbmcsXG4gICAgICAgIGNyb3BwaW5nQXNwZWN0UmF0aW86IHJhdGlvLFxuICAgICAgICBjcm9wcGluZ0RlZmF1bHRTZWxlY3Rpb25SYXRpbzogMC44LFxuICAgICAgICByZXNvdXJjZVR5cGU6ICdpbWFnZScsXG4gICAgICAgIGNsaWVudEFsbG93ZWRGb3JtYXRzOiBbJ3BuZycsICdqcGcnLCAnanBlZycsICdnaWYnXSxcbiAgICAgICAgbWF4SW1hZ2VXaWR0aDogNTAwLFxuICAgICAgICBtYXhJbWFnZUhlaWdodDogNTAwLFxuICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgYnV0dG9uQ2xhc3M6ICdkLW5vbmUnLFxuICAgICAgICBzb3VyY2VzOiBbJ2xvY2FsJywgJ2NhbWVyYSddLFxuICAgICAgfSxcbiAgICAgIChlcnJvciwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFlcnJvciAmJiByZXN1bHQgJiYgcmVzdWx0LmV2ZW50ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU3VjY2VzcyhyZXN1bHQuaW5mby5zZWN1cmVfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVGYWlsdXJlKGVycm9yKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMud2lkZ2V0Lm9wZW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiJdfQ==