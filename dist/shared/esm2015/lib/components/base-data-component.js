/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BaseComponent } from './base-component';
import { selectedFilter } from 'helpers';
/**
 * @abstract
 */
export class BaseDataComponent extends BaseComponent {
    constructor() {
        super();
        this.debouceTime = 500;
        this.dataSize = 0;
        this.data = [];
        this.params = {
            page: 1,
            size: 1000,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.populateTable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    onPopulateTableComplete(data, totalRecords) {
        this.loading = false;
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
    }
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    registerSearchObservables(observableKeyword) {
        this.registerObservables(observableKeyword, 'loading', (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.filter(observableKeyword, value);
        }));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    handleSearch(key, value) {
        this[`${key}$`].next(value);
    }
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    registerObservables(observableKeyword, loader, callback) {
        this.subscription.add(this[`${observableKeyword}$`]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            callback(value);
        })));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    filter(key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    paginate({ page, size }) {
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    }
}
if (false) {
    /** @type {?} */
    BaseDataComponent.prototype.params;
    /** @type {?} */
    BaseDataComponent.prototype.debouceTime;
    /** @type {?} */
    BaseDataComponent.prototype.dataSize;
    /** @type {?} */
    BaseDataComponent.prototype.data;
    /**
     * @abstract
     * @return {?}
     */
    BaseDataComponent.prototype.populateTable = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2UtZGF0YS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFFekMsTUFBTSxPQUFnQixpQkFBa0IsU0FBUSxhQUFhO0lBTzNEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFMSCxnQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUlmLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxJQUFTLEVBQUUsWUFBb0I7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLGlCQUF5QjtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsU0FBUzs7OztRQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsbUJBQW1CLENBQ2pCLGlCQUF5QixFQUN6QixNQUFjLEVBQ2QsUUFBYTtRQUViLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxDQUFDO2FBQzFCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxFQUNGLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFJTSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBekVDLG1DQUFtQjs7SUFDbkIsd0NBQXlCOztJQUN6QixxQ0FBb0I7O0lBQ3BCLGlDQUFpQjs7Ozs7SUErRGpCLDREQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBzZWxlY3RlZEZpbHRlciB9IGZyb20gJ2hlbHBlcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGFDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcGFyYW1zOiBhbnk7XG4gIHB1YmxpYyBkZWJvdWNlVGltZSA9IDUwMDtcbiAgcHVibGljIGRhdGFTaXplID0gMDtcbiAgcHVibGljIGRhdGEgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHNpemU6IDEwMDAsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uUG9wdWxhdGVUYWJsZUNvbXBsZXRlKGRhdGE6IGFueSwgdG90YWxSZWNvcmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuZGF0YVNpemUgPSB0b3RhbFJlY29yZHM7XG4gICAgdGhpcy5pc0VtcHR5ID0gZGF0YS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZWdpc3RlclNlYXJjaE9ic2VydmFibGVzKG9ic2VydmFibGVLZXl3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2YWJsZXMob2JzZXJ2YWJsZUtleXdvcmQsICdsb2FkaW5nJywgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyKG9ic2VydmFibGVLZXl3b3JkLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzW2Ake2tleX0kYF0ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9ic2VydmFibGVzKFxuICAgIG9ic2VydmFibGVLZXl3b3JkOiBzdHJpbmcsXG4gICAgbG9hZGVyOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IGFueSxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpc1tgJHtvYnNlcnZhYmxlS2V5d29yZH0kYF1cbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFwKF8gPT4ge1xuICAgICAgICAgICAgdGhpc1tsb2FkZXJdID0gdHJ1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdWNlVGltZSksXG4gICAgICAgICAgdGFwKF8gPT4ge1xuICAgICAgICAgICAgdGhpc1tsb2FkZXJdID0gZmFsc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZpbHRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zID0gc2VsZWN0ZWRGaWx0ZXIodGhpcy5wYXJhbXMsIGtleSwgdmFsdWUpO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHBvcHVsYXRlVGFibGUoKTogdm9pZDtcblxuICBwdWJsaWMgcGFnaW5hdGUoeyBwYWdlLCBzaXplIH0pOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLnBhcmFtcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLnBvcHVsYXRlVGFibGUoKTtcbiAgfVxufVxuIl19