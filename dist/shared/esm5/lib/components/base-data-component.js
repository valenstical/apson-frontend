/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BaseComponent } from './base-component';
import { selectedFilter } from 'helpers';
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseDataComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDataComponent, _super);
    function BaseDataComponent() {
        var _this = _super.call(this) || this;
        _this.debouceTime = 500;
        _this.dataSize = 0;
        _this.data = [];
        _this.params = {
            page: 1,
            size: 1000,
        };
        return _this;
    }
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.populateTable();
    };
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    BaseDataComponent.prototype.onPopulateTableComplete = /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    function (data, totalRecords) {
        this.loading = false;
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
    };
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    BaseDataComponent.prototype.registerSearchObservables = /**
     * @param {?} observableKeyword
     * @return {?}
     */
    function (observableKeyword) {
        var _this = this;
        this.registerObservables(observableKeyword, 'loading', (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.filter(observableKeyword, value);
        }));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.handleSearch = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key + "$"].next(value);
    };
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    BaseDataComponent.prototype.registerObservables = /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    function (observableKeyword, loader, callback) {
        var _this = this;
        this.subscription.add(this[observableKeyword + "$"]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            callback(value);
        })));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.filter = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BaseDataComponent.prototype.paginate = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var page = _a.page, size = _a.size;
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    };
    return BaseDataComponent;
}(BaseComponent));
/**
 * @abstract
 */
export { BaseDataComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2UtZGF0YS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRXpDOzs7O0lBQWdELDZDQUFhO0lBTzNEO1FBQUEsWUFDRSxpQkFBTyxTQUtSO1FBVk0saUJBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLFVBQUksR0FBRyxFQUFFLENBQUM7UUFJZixLQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7O0lBQ0osQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxtREFBdUI7Ozs7O0lBQXZCLFVBQXdCLElBQVMsRUFBRSxZQUFvQjtRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQscURBQXlCOzs7O0lBQXpCLFVBQTBCLGlCQUF5QjtRQUFuRCxpQkFJQztRQUhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTOzs7O1FBQUUsVUFBQyxLQUFVO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCx3Q0FBWTs7Ozs7SUFBWixVQUFhLEdBQVcsRUFBRSxLQUFhO1FBQ3JDLElBQUksQ0FBSSxHQUFHLE1BQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsK0NBQW1COzs7Ozs7SUFBbkIsVUFDRSxpQkFBeUIsRUFDekIsTUFBYyxFQUNkLFFBQWE7UUFIZixpQkFxQkM7UUFoQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBSSxpQkFBaUIsTUFBRyxDQUFDO2FBQzFCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQUMsRUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSxrQ0FBTTs7Ozs7SUFBYixVQUFjLEdBQVcsRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUlNLG9DQUFROzs7O0lBQWYsVUFBZ0IsRUFBYztZQUFaLGNBQUksRUFBRSxjQUFJO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUEzRUQsQ0FBZ0QsYUFBYSxHQTJFNUQ7Ozs7Ozs7SUF6RUMsbUNBQW1COztJQUNuQix3Q0FBeUI7O0lBQ3pCLHFDQUFvQjs7SUFDcEIsaUNBQWlCOzs7OztJQStEakIsNERBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IHNlbGVjdGVkRmlsdGVyIH0gZnJvbSAnaGVscGVycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBwYXJhbXM6IGFueTtcbiAgcHVibGljIGRlYm91Y2VUaW1lID0gNTAwO1xuICBwdWJsaWMgZGF0YVNpemUgPSAwO1xuICBwdWJsaWMgZGF0YSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgc2l6ZTogMTAwMCxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZVRhYmxlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25Qb3B1bGF0ZVRhYmxlQ29tcGxldGUoZGF0YTogYW55LCB0b3RhbFJlY29yZHM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5kYXRhU2l6ZSA9IHRvdGFsUmVjb3JkcztcbiAgICB0aGlzLmlzRW1wdHkgPSBkYXRhLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VhcmNoT2JzZXJ2YWJsZXMob2JzZXJ2YWJsZUtleXdvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZhYmxlcyhvYnNlcnZhYmxlS2V5d29yZCwgJ2xvYWRpbmcnLCAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXIob2JzZXJ2YWJsZUtleXdvcmQsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXNbYCR7a2V5fSRgXS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT2JzZXJ2YWJsZXMoXG4gICAgb2JzZXJ2YWJsZUtleXdvcmQ6IHN0cmluZyxcbiAgICBsb2FkZXI6IHN0cmluZyxcbiAgICBjYWxsYmFjazogYW55LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzW2Ake29ic2VydmFibGVLZXl3b3JkfSRgXVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoXyA9PiB7XG4gICAgICAgICAgICB0aGlzW2xvYWRlcl0gPSB0cnVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91Y2VUaW1lKSxcbiAgICAgICAgICB0YXAoXyA9PiB7XG4gICAgICAgICAgICB0aGlzW2xvYWRlcl0gPSBmYWxzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMgPSBzZWxlY3RlZEZpbHRlcih0aGlzLnBhcmFtcywga2V5LCB2YWx1ZSk7XG4gICAgdGhpcy5wb3B1bGF0ZVRhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgcG9wdWxhdGVUYWJsZSgpOiB2b2lkO1xuXG4gIHB1YmxpYyBwYWdpbmF0ZSh7IHBhZ2UsIHNpemUgfSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zLnNpemUgPSBzaXplO1xuICAgIHRoaXMucGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG59XG4iXX0=