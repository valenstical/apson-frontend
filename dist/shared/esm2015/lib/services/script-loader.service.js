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
export const ScriptStore = [
    {
        name: 'cloudinary',
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
    },
    { name: 'paystack', src: 'https://js.paystack.co/v1/inline.js' },
];
export class ScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        (script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    load(...scripts) {
        /** @type {?} */
        const promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        script => promises.push(this.loadScript(script))));
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.scripts[name].loaded) {
                /** @type {?} */
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    script.onreadystatechange = (/**
                     * @return {?}
                     */
                    () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    });
                }
                else {
                    script.onload = (/**
                     * @return {?}
                     */
                    () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    });
                }
                script.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => resolve({ script: name, loaded: false, status: 'Loaded' }));
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        }));
    }
}
ScriptLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ScriptLoaderService.ctorParameters = () => [];
/** @nocollapse */ ScriptLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScriptLoaderService.prototype.scripts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NjcmlwdC1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFM0Msc0JBR0M7OztJQUZDLHVCQUFhOztJQUNiLHNCQUFZOzs7QUFHZCxNQUFNLE9BQU8sV0FBVyxHQUFjO0lBQ3BDO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsR0FBRyxFQUFFLGtEQUFrRDtLQUN4RDtJQUNELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUU7Q0FDakU7QUFPRCxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCO1FBRlEsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUd4QixXQUFXLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQzFCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRzthQUNoQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLE9BQWlCOztjQUNqQixRQUFRLEdBQVUsRUFBRTtRQUMxQixPQUFPLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNsRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7O3NCQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDckIsTUFBTSxDQUFDLGtCQUFrQjs7O29CQUFHLEdBQUcsRUFBRTt3QkFDL0IsSUFDRSxNQUFNLENBQUMsVUFBVSxLQUFLLFFBQVE7NEJBQzlCLE1BQU0sQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUNoQzs0QkFDQSxNQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDOzRCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ2pDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzt5QkFDM0Q7b0JBQ0gsQ0FBQyxDQUFBLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLE1BQU07OztvQkFBRyxHQUFHLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM1RCxDQUFDLENBQUEsQ0FBQztpQkFDSDtnQkFDRCxNQUFNLENBQUMsT0FBTzs7OztnQkFBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQzlCLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUM3RCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgU2NyaXB0cyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTY3JpcHRTdG9yZTogU2NyaXB0c1tdID0gW1xuICB7XG4gICAgbmFtZTogJ2Nsb3VkaW5hcnknLFxuICAgIHNyYzogJ2h0dHBzOi8vd2lkZ2V0LmNsb3VkaW5hcnkuY29tL3YyLjAvZ2xvYmFsL2FsbC5qcycsXG4gIH0sXG4gIHsgbmFtZTogJ3BheXN0YWNrJywgc3JjOiAnaHR0cHM6Ly9qcy5wYXlzdGFjay5jby92MS9pbmxpbmUuanMnIH0sXG5dO1xuXG5kZWNsYXJlIGNvbnN0IGRvY3VtZW50OiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTY3JpcHRMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzY3JpcHRzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBTY3JpcHRTdG9yZS5mb3JFYWNoKChzY3JpcHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zY3JpcHRzW3NjcmlwdC5uYW1lXSA9IHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgc3JjOiBzY3JpcHQuc3JjLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWQoLi4uc2NyaXB0czogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXTtcbiAgICBzY3JpcHRzLmZvckVhY2goc2NyaXB0ID0+IHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgbG9hZFNjcmlwdChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gdGhpcy5zY3JpcHRzW25hbWVdLnNyYztcbiAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tuYW1lXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRzW25hbWVdLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxuICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogZmFsc2UsIHN0YXR1czogJ0xvYWRlZCcgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnQWxyZWFkeSBMb2FkZWQnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=