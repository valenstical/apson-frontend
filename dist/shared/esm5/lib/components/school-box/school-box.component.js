/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
import { selectedFilter, toMobileNumber } from 'helpers';
var SchoolBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SchoolBoxComponent, _super);
    function SchoolBoxComponent(requestService) {
        var _this = _super.call(this) || this;
        _this.requestService = requestService;
        _this.schoolParams = new Subject();
        _this.size = 6;
        return _this;
    }
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.params.size = this.size;
        this.initFilterSubscription();
        this.populateTable();
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    SchoolBoxComponent.prototype.setSchoolData = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _a = response.data, result = _a.result, page = _a.page;
        this.loading = false;
        this.schools = result || [];
        this.isEmpty = this.schools.length === 0;
    };
    /**
     * @param {?} phone
     * @return {?}
     */
    SchoolBoxComponent.prototype.getMobileNumber = /**
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        return toMobileNumber(phone);
    };
    /**
     * @private
     * @return {?}
     */
    SchoolBoxComponent.prototype.initFilterSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.schoolParams.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            if (key === 'state' && _this.params.lga) {
                delete _this.params.lga;
            }
            _this.params = selectedFilter(_this.params, key, value);
            _this.populateTable();
        })));
    };
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.populateTable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.schools = [];
        this.subscription.add(this.requestService.searchSchools(this.params).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setSchoolData(response);
        }), (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.loading = false;
            _this.isError = true;
        })));
    };
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    SchoolBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-school-box',
                    template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ getMobileNumber(school.contact.phone) }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title text-capitalize\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\" class=\"text-sentence\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ getMobileNumber(school.contact.phone) }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
                }] }
    ];
    /** @nocollapse */
    SchoolBoxComponent.ctorParameters = function () { return [
        { type: RequestService }
    ]; };
    SchoolBoxComponent.propDecorators = {
        schoolParams: [{ type: Input }],
        size: [{ type: Input }]
    };
    return SchoolBoxComponent;
}(BaseDataComponent));
export { SchoolBoxComponent };
if (false) {
    /** @type {?} */
    SchoolBoxComponent.prototype.schools;
    /** @type {?} */
    SchoolBoxComponent.prototype.schoolParams;
    /** @type {?} */
    SchoolBoxComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    SchoolBoxComponent.prototype.requestService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hvb2wtYm94L3NjaG9vbC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXpEO0lBSXdDLDhDQUFpQjtJQU12RCw0QkFBb0IsY0FBOEI7UUFBbEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh6QyxrQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsVUFBSSxHQUFHLENBQUMsQ0FBQzs7SUFJbEIsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLDBDQUFhOzs7OztJQUFyQixVQUFzQixRQUFhO1FBRS9CLElBQUEsa0JBQXNCLEVBQWQsa0JBQU0sRUFBRSxjQUFNO1FBRXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBYTtRQUMzQixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVPLG1EQUFzQjs7OztJQUE5QjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFDdkMsSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUN0QyxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3hCO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQWE7OztJQUFiO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDdEQsVUFBQSxRQUFRO1lBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7O1FBQ0QsVUFBQSxDQUFDO1lBQ0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUN0QixDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZqRUFBMEM7aUJBQzNDOzs7O2dCQVJRLGNBQWM7OzsrQkFZcEIsS0FBSzt1QkFDTCxLQUFLOztJQXdEUix5QkFBQztDQUFBLEFBaEVELENBSXdDLGlCQUFpQixHQTREeEQ7U0E1RFksa0JBQWtCOzs7SUFFN0IscUNBQXlCOztJQUN6QiwwQ0FBc0M7O0lBQ3RDLGtDQUFrQjs7Ozs7SUFFTiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nob29sIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaG9vbCc7XG5pbXBvcnQgeyBSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCYXNlRGF0YUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtZGF0YS1jb21wb25lbnQnO1xuaW1wb3J0IHsgc2VsZWN0ZWRGaWx0ZXIsIHRvTW9iaWxlTnVtYmVyIH0gZnJvbSAnaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zY2hvb2wtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaG9vbC1ib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2hvb2xCb3hDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0YUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNjaG9vbHM6IFNjaG9vbFtdO1xuICBASW5wdXQoKSBzY2hvb2xQYXJhbXMgPSBuZXcgU3ViamVjdCgpO1xuICBASW5wdXQoKSBzaXplID0gNjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcXVlc3RTZXJ2aWNlOiBSZXF1ZXN0U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtcy5zaXplID0gdGhpcy5zaXplO1xuICAgIHRoaXMuaW5pdEZpbHRlclN1YnNjcmlwdGlvbigpO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTY2hvb2xEYXRhKHJlc3BvbnNlOiBhbnkpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHJlc3VsdCwgcGFnZSB9LFxuICAgIH0gPSByZXNwb25zZTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNjaG9vbHMgPSByZXN1bHQgfHwgW107XG4gICAgdGhpcy5pc0VtcHR5ID0gdGhpcy5zY2hvb2xzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGdldE1vYmlsZU51bWJlcihwaG9uZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9Nb2JpbGVOdW1iZXIocGhvbmUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmlsdGVyU3Vic2NyaXB0aW9uKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc2Nob29sUGFyYW1zLnN1YnNjcmliZSgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJyAmJiB0aGlzLnBhcmFtcy5sZ2EpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5wYXJhbXMubGdhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyYW1zID0gc2VsZWN0ZWRGaWx0ZXIodGhpcy5wYXJhbXMsIGtleSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlVGFibGUoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwb3B1bGF0ZVRhYmxlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yZXF1ZXN0U2VydmljZS5zZWFyY2hTY2hvb2xzKHRoaXMucGFyYW1zKS5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnNldFNjaG9vbERhdGEocmVzcG9uc2UpO1xuICAgICAgICB9LFxuICAgICAgICBfID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19