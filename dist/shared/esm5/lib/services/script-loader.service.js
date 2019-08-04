/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Scripts() { }
if (false) {
    /** @type {?} */
    Scripts.prototype.name;
    /** @type {?} */
    Scripts.prototype.src;
}
/** @type {?} */
export var ScriptStore = [
    {
        name: 'cloudinary',
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
    },
    { name: 'paystack', src: 'https://js.paystack.co/v1/inline.js' },
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    ScriptLoaderService.prototype.load = /**
     * @param {...?} scripts
     * @return {?}
     */
    function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        /** @type {?} */
        var promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) { return promises.push(_this.loadScript(script)); }));
        return Promise.all(promises);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ScriptLoaderService.prototype.loadScript = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                /** @type {?} */
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = (/**
                     * @return {?}
                     */
                    function () {
                        if (script_1.readyState === 'loaded' ||
                            script_1.readyState === 'complete') {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    });
                }
                else {
                    script_1.onload = (/**
                     * @return {?}
                     */
                    function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    });
                }
                script_1.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return resolve({ script: name, loaded: false, status: 'Loaded' });
                });
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        }));
    };
    ScriptLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ScriptLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScriptLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
    return ScriptLoaderService;
}());
export { ScriptLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScriptLoaderService.prototype.scripts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NjcmlwdC1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFM0Msc0JBR0M7OztJQUZDLHVCQUFhOztJQUNiLHNCQUFZOzs7QUFHZCxNQUFNLEtBQU8sV0FBVyxHQUFjO0lBQ3BDO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsR0FBRyxFQUFFLGtEQUFrRDtLQUN4RDtJQUNELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUU7Q0FDakU7QUFJRDtJQU1FO1FBQUEsaUJBT0M7UUFUTyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBR3hCLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFXO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUMxQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7YUFDaEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxrQ0FBSTs7OztJQUFKO1FBQUEsaUJBSUM7UUFKSSxpQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLDRCQUFvQjs7O1lBQ2pCLFFBQVEsR0FBVSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFBQyxDQUFDO1FBQ2xFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQXZCLGlCQThCQztRQTdCQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTs7b0JBQ3hCLFFBQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDL0MsUUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEMsUUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxRQUFNLENBQUMsVUFBVSxFQUFFO29CQUNyQixRQUFNLENBQUMsa0JBQWtCOzs7b0JBQUc7d0JBQzFCLElBQ0UsUUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFROzRCQUM5QixRQUFNLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFDaEM7NEJBQ0EsUUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzs0QkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNqQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7eUJBQzNEO29CQUNILENBQUMsQ0FBQSxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLFFBQU0sQ0FBQyxNQUFNOzs7b0JBQUc7d0JBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNqQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzVELENBQUMsQ0FBQSxDQUFDO2lCQUNIO2dCQUNELFFBQU0sQ0FBQyxPQUFPOzs7O2dCQUFHLFVBQUMsS0FBVTtvQkFDMUIsT0FBQSxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUExRCxDQUEwRCxDQUFBLENBQUM7Z0JBQzdELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBTSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7YUFDbkU7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5ERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs4QkFuQkQ7Q0FxRUMsQUFwREQsSUFvREM7U0FqRFksbUJBQW1COzs7Ozs7SUFDOUIsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgU2NyaXB0cyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTY3JpcHRTdG9yZTogU2NyaXB0c1tdID0gW1xuICB7XG4gICAgbmFtZTogJ2Nsb3VkaW5hcnknLFxuICAgIHNyYzogJ2h0dHBzOi8vd2lkZ2V0LmNsb3VkaW5hcnkuY29tL3YyLjAvZ2xvYmFsL2FsbC5qcycsXG4gIH0sXG4gIHsgbmFtZTogJ3BheXN0YWNrJywgc3JjOiAnaHR0cHM6Ly9qcy5wYXlzdGFjay5jby92MS9pbmxpbmUuanMnIH0sXG5dO1xuXG5kZWNsYXJlIGNvbnN0IGRvY3VtZW50OiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTY3JpcHRMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzY3JpcHRzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBTY3JpcHRTdG9yZS5mb3JFYWNoKChzY3JpcHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zY3JpcHRzW3NjcmlwdC5uYW1lXSA9IHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgc3JjOiBzY3JpcHQuc3JjLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWQoLi4uc2NyaXB0czogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXTtcbiAgICBzY3JpcHRzLmZvckVhY2goc2NyaXB0ID0+IHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgbG9hZFNjcmlwdChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gdGhpcy5zY3JpcHRzW25hbWVdLnNyYztcbiAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tuYW1lXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRzW25hbWVdLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxuICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogZmFsc2UsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnQWxyZWFkeSBMb2FkZWQnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=