/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
import { selectedFilter } from 'helpers';
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
                    template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ school.contact.phone }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ school.contact.phone }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hvb2wtYm94L3NjaG9vbC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekM7SUFJd0MsOENBQWlCO0lBTXZELDRCQUFvQixjQUE4QjtRQUFsRCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBSHpDLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixVQUFJLEdBQUcsQ0FBQyxDQUFDOztJQUlsQixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sMENBQWE7Ozs7O0lBQXJCLFVBQXNCLFFBQWE7UUFFL0IsSUFBQSxrQkFBc0IsRUFBZCxrQkFBTSxFQUFFLGNBQU07UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU8sbURBQXNCOzs7O0lBQTlCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFjO2dCQUFaLFlBQUcsRUFBRSxnQkFBSztZQUN2QyxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDeEI7WUFDRCxLQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUN0RCxVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7Ozs7UUFDRCxVQUFBLENBQUM7WUFDQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsbS9EQUEwQztpQkFDM0M7Ozs7Z0JBUlEsY0FBYzs7OytCQVlwQixLQUFLO3VCQUNMLEtBQUs7O0lBb0RSLHlCQUFDO0NBQUEsQUE1REQsQ0FJd0MsaUJBQWlCLEdBd0R4RDtTQXhEWSxrQkFBa0I7OztJQUU3QixxQ0FBeUI7O0lBQ3pCLDBDQUFzQzs7SUFDdEMsa0NBQWtCOzs7OztJQUVOLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hvb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Nob29sJztcbmltcG9ydCB7IFJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVxdWVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJhc2VEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1kYXRhLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBzZWxlY3RlZEZpbHRlciB9IGZyb20gJ2hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2Nob29sLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hvb2wtYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2Nob29sQm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZURhdGFDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBzY2hvb2xzOiBTY2hvb2xbXTtcbiAgQElucHV0KCkgc2Nob29sUGFyYW1zID0gbmV3IFN1YmplY3QoKTtcbiAgQElucHV0KCkgc2l6ZSA9IDY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXF1ZXN0U2VydmljZTogUmVxdWVzdFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLmluaXRGaWx0ZXJTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnBvcHVsYXRlVGFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2Nob29sRGF0YShyZXNwb25zZTogYW55KSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyByZXN1bHQsIHBhZ2UgfSxcbiAgICB9ID0gcmVzcG9uc2U7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zY2hvb2xzID0gcmVzdWx0IHx8IFtdO1xuICAgIHRoaXMuaXNFbXB0eSA9IHRoaXMuc2Nob29scy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIGluaXRGaWx0ZXJTdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zY2hvb2xQYXJhbXMuc3Vic2NyaWJlKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnc3RhdGUnICYmIHRoaXMucGFyYW1zLmxnYSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtcy5sZ2E7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJhbXMgPSBzZWxlY3RlZEZpbHRlcih0aGlzLnBhcmFtcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHBvcHVsYXRlVGFibGUoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNjaG9vbHMgPSBbXTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJlcXVlc3RTZXJ2aWNlLnNlYXJjaFNjaG9vbHModGhpcy5wYXJhbXMpLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U2Nob29sRGF0YShyZXNwb25zZSk7XG4gICAgICAgIH0sXG4gICAgICAgIF8gPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNFcnJvciA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=