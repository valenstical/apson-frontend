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
        this.classReference = BaseComponent;
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
    toggleMenu() {
        BaseComponent.showMenu = !BaseComponent.showMenu;
    }
}
BaseComponent.showMenu = false;
if (false) {
    /** @type {?} */
    BaseComponent.showMenu;
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
    BaseComponent.prototype.classReference;
    /** @type {?} */
    BaseComponent.prototype.hideAlert;
    /** @type {?} */
    BaseComponent.prototype.show404;
    /** @type {?} */
    BaseComponent.prototype.response;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdwQyxNQUFNLE9BQU8sYUFBYTtJQWV4QjtRQWRVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUc7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ2EsQ0FBQzs7Ozs7O0lBRU4sYUFBYSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFDUyxXQUFXLENBQUMsT0FBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssVUFBVSxHQUFHLEVBQUU7UUFDckIsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRVMsV0FBVyxDQUFDLEdBQVE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixFQUNGLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FDekIsR0FBRyxHQUFHO1FBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O2NBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRCxDQUFDOztBQWhETSxzQkFBUSxHQUFHLEtBQUssQ0FBQzs7O0lBQXhCLHVCQUF3Qjs7Ozs7SUFMeEIscUNBQTRDOztJQUM1QywrQkFBZTs7SUFDZixnQ0FBZ0I7O0lBQ2hCLGdDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBRWYsdUNBQStCOztJQUMvQixrQ0FBaUI7O0lBQ2pCLGdDQUFlOztJQUNmLGlDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBpc0J1c3kgPSBmYWxzZTtcbiAgaXNFbXB0eSA9IGZhbHNlO1xuICBpc0Vycm9yID0gZmFsc2U7XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBzdGF0aWMgc2hvd01lbnUgPSBmYWxzZTtcbiAgY2xhc3NSZWZlcmVuY2UgPSBCYXNlQ29tcG9uZW50O1xuICBoaWRlQWxlcnQgPSB0cnVlO1xuICBzaG93NDA0ID0gdHJ1ZTtcbiAgcmVzcG9uc2UgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIG1lc3NhZ2U6IFtdLFxuICAgIHR5cGU6ICcnLFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJvdGVjdGVkIHRvZ2dsZUxvYWRlcnModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQnVzeSA9IHZhbHVlO1xuICAgIHRoaXMuaGlkZUFsZXJ0ID0gdmFsdWU7XG4gIH1cbiAgcHJvdGVjdGVkIHNob3dNZXNzYWdlKG1lc3NhZ2U6IGFueSwgdGl0bGU6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXNwb25zZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnJlc3BvbnNlLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5yZXNwb25zZS50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgYXJyYXlWYWx1ZXMoYXJyYXk6IGFueSk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JHcm91cCA9IFtdO1xuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgZXJyb3JHcm91cC5wdXNoKE9iamVjdC52YWx1ZXMoZWxlbWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlcnJvckdyb3VwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVMb2FkZXJzKGZhbHNlKTtcbiAgICBsZXQge1xuICAgICAgZXJyb3I6IHsgZGF0YSwgbWVzc2FnZSB9LFxuICAgIH0gPSBlcnI7XG4gICAgZGF0YSA9IHRoaXMuYXJyYXlWYWx1ZXMoZGF0YSk7XG4gICAgY29uc3QgdGl0bGUgPSBkYXRhLmxlbmd0aCA9PT0gMCA/ICcnIDogbWVzc2FnZTtcbiAgICBtZXNzYWdlID0gdGl0bGUgPyBkYXRhIDogbWVzc2FnZTtcbiAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2UsIHRpdGxlLCAnZGFuZ2VyJyk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgQmFzZUNvbXBvbmVudC5zaG93TWVudSA9ICFCYXNlQ29tcG9uZW50LnNob3dNZW51O1xuICB9XG59XG4iXX0=