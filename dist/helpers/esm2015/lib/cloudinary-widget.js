/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
params => { });
const ɵ0 = defaultFunc;
/** @type {?} */
const styles = {
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
export class CloudinaryWidget {
    /**
     * @param {?=} handleSuccess
     * @param {?=} handleFailure
     * @param {?=} ratio
     * @param {?=} preset
     * @param {?=} cropping
     */
    constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, ratio = 1, preset = 'profile', cropping = true) {
        this.widget = window.cloudinary.createUploadWidget({
            cloudName: 'dvnrltpfi',
            uploadPreset: preset,
            cropping,
            croppingAspectRatio: ratio,
            croppingDefaultSelectionRatio: 0.8,
            resourceType: 'image',
            clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
            maxImageWidth: 500,
            maxImageHeight: 500,
            multiple: false,
            styles,
            buttonClass: 'd-none',
            sources: ['local', 'camera'],
        }, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        (error, result) => {
            if (!error && result && result.event === 'success') {
                return handleSuccess(result.info.secure_url);
            }
            handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    open() {
        this.widget.open();
    }
}
if (false) {
    /** @type {?} */
    CloudinaryWidget.prototype.widget;
}
export default {};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BRU0sV0FBVzs7OztBQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFBOzs7TUFDMUIsTUFBTSxHQUFHO0lBQ2IsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUUsU0FBUztRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsU0FBUztLQUNyQjtDQUNGO0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7SUFFM0IsWUFDRSxhQUFhLEdBQUcsV0FBVyxFQUMzQixhQUFhLEdBQUcsV0FBVyxFQUMzQixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxTQUFTLEVBQ2xCLFFBQVEsR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNoRDtZQUNFLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLFFBQVE7WUFDUixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLDZCQUE2QixFQUFFLEdBQUc7WUFDbEMsWUFBWSxFQUFFLE9BQU87WUFDckIsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDbkQsYUFBYSxFQUFFLEdBQUc7WUFDbEIsY0FBYyxFQUFFLEdBQUc7WUFDbkIsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNO1lBQ04sV0FBVyxFQUFFLFFBQVE7WUFDckIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUM3Qjs7Ozs7UUFDRCxDQUFDLEtBQUssRUFBRSxNQUFXLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDbEQsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM5QztZQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7OztJQW5DQyxrQ0FBWTs7QUFxQ2QsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciB3aW5kb3c7XG5cbmNvbnN0IGRlZmF1bHRGdW5jID0gcGFyYW1zID0+IHt9O1xuY29uc3Qgc3R5bGVzID0ge1xuICBwYWxldHRlOiB7XG4gICAgd2luZG93OiAnI0ZGRkZGRicsXG4gICAgc291cmNlQmc6ICcjRkJGQkZCJyxcbiAgICB3aW5kb3dCb3JkZXI6ICcjMDBiMDliJyxcbiAgICB0YWJJY29uOiAnIzAwMDAwMCcsXG4gICAgaW5hY3RpdmVUYWJJY29uOiAnIzBEMkY1QScsXG4gICAgbWVudUljb25zOiAnIzU1NWE1ZicsXG4gICAgbGluazogJyMwMGIwOWInLFxuICAgIGFjdGlvbjogJyMzMzk5MzMnLFxuICAgIGluUHJvZ3Jlc3M6ICcjMDQzM2ZmJyxcbiAgICBjb21wbGV0ZTogJyMzMzk5MzMnLFxuICAgIGVycm9yOiAnI2NjMDAwMCcsXG4gICAgdGV4dERhcms6ICcjMDAwMDAwJyxcbiAgICB0ZXh0TGlnaHQ6ICcjRkZGRkZGJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5V2lkZ2V0IHtcbiAgd2lkZ2V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGhhbmRsZVN1Y2Nlc3MgPSBkZWZhdWx0RnVuYyxcbiAgICBoYW5kbGVGYWlsdXJlID0gZGVmYXVsdEZ1bmMsXG4gICAgcmF0aW8gPSAxLFxuICAgIHByZXNldCA9ICdwcm9maWxlJyxcbiAgICBjcm9wcGluZyA9IHRydWUsXG4gICkge1xuICAgIHRoaXMud2lkZ2V0ID0gd2luZG93LmNsb3VkaW5hcnkuY3JlYXRlVXBsb2FkV2lkZ2V0KFxuICAgICAge1xuICAgICAgICBjbG91ZE5hbWU6ICdkdm5ybHRwZmknLFxuICAgICAgICB1cGxvYWRQcmVzZXQ6IHByZXNldCxcbiAgICAgICAgY3JvcHBpbmcsXG4gICAgICAgIGNyb3BwaW5nQXNwZWN0UmF0aW86IHJhdGlvLFxuICAgICAgICBjcm9wcGluZ0RlZmF1bHRTZWxlY3Rpb25SYXRpbzogMC44LFxuICAgICAgICByZXNvdXJjZVR5cGU6ICdpbWFnZScsXG4gICAgICAgIGNsaWVudEFsbG93ZWRGb3JtYXRzOiBbJ3BuZycsICdqcGcnLCAnanBlZycsICdnaWYnXSxcbiAgICAgICAgbWF4SW1hZ2VXaWR0aDogNTAwLFxuICAgICAgICBtYXhJbWFnZUhlaWdodDogNTAwLFxuICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgYnV0dG9uQ2xhc3M6ICdkLW5vbmUnLFxuICAgICAgICBzb3VyY2VzOiBbJ2xvY2FsJywgJ2NhbWVyYSddLFxuICAgICAgfSxcbiAgICAgIChlcnJvciwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFlcnJvciAmJiByZXN1bHQgJiYgcmVzdWx0LmV2ZW50ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlU3VjY2VzcyhyZXN1bHQuaW5mby5zZWN1cmVfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVGYWlsdXJlKGVycm9yKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMud2lkZ2V0Lm9wZW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiJdfQ==