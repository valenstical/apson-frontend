/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from 'rxjs';
export class BaseComponent {
    constructor() {
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
    toggleLoaders(value) {
        this.isBusy = value;
        this.hideAlert = value;
    }
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    showMessage(message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    arrayValues(array) {
        if (!Array.isArray(array)) {
            return [];
        }
        /** @type {?} */
        const errorGroup = [];
        array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            errorGroup.push(Object.values(element));
        }));
        return errorGroup;
    }
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.toggleLoaders(false);
        let { error: { data, message }, } = err;
        data = this.arrayValues(data);
        /** @type {?} */
        const title = data.length === 0 ? '' : message;
        message = title ? data : message;
        this.showMessage(message, title, 'danger');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    toggleMenu() { }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdwQyxNQUFNLE9BQU8sYUFBYTtJQWF4QjtRQVpVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUc7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ2EsQ0FBQzs7Ozs7O0lBRU4sYUFBYSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFDUyxXQUFXLENBQUMsT0FBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssVUFBVSxHQUFHLEVBQUU7UUFDckIsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRVMsV0FBVyxDQUFDLEdBQVE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixFQUNGLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FDekIsR0FBRyxHQUFHO1FBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O2NBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFqREMscUNBQTRDOztJQUM1QywrQkFBZTs7SUFDZixnQ0FBZ0I7O0lBQ2hCLGdDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBQ2Ysa0NBQWlCOztJQUNqQixnQ0FBZTs7SUFDZixpQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgaXNCdXN5ID0gZmFsc2U7XG4gIGlzRW1wdHkgPSBmYWxzZTtcbiAgaXNFcnJvciA9IGZhbHNlO1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgaGlkZUFsZXJ0ID0gdHJ1ZTtcbiAgc2hvdzQwNCA9IHRydWU7XG4gIHJlc3BvbnNlID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBtZXNzYWdlOiBbXSxcbiAgICB0eXBlOiAnJyxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByb3RlY3RlZCB0b2dnbGVMb2FkZXJzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0J1c3kgPSB2YWx1ZTtcbiAgICB0aGlzLmhpZGVBbGVydCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBzaG93TWVzc2FnZShtZXNzYWdlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVzcG9uc2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5yZXNwb25zZS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucmVzcG9uc2UudHlwZSA9IHR5cGU7XG4gIH1cblxuICBwcml2YXRlIGFycmF5VmFsdWVzKGFycmF5OiBhbnkpOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGVycm9yR3JvdXAgPSBbXTtcbiAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgIGVycm9yR3JvdXAucHVzaChPYmplY3QudmFsdWVzKGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3JHcm91cDtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlTG9hZGVycyhmYWxzZSk7XG4gICAgbGV0IHtcbiAgICAgIGVycm9yOiB7IGRhdGEsIG1lc3NhZ2UgfSxcbiAgICB9ID0gZXJyO1xuICAgIGRhdGEgPSB0aGlzLmFycmF5VmFsdWVzKGRhdGEpO1xuICAgIGNvbnN0IHRpdGxlID0gZGF0YS5sZW5ndGggPT09IDAgPyAnJyA6IG1lc3NhZ2U7XG4gICAgbWVzc2FnZSA9IHRpdGxlID8gZGF0YSA6IG1lc3NhZ2U7XG4gICAgdGhpcy5zaG93TWVzc2FnZShtZXNzYWdlLCB0aXRsZSwgJ2RhbmdlcicpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHt9XG59XG4iXX0=