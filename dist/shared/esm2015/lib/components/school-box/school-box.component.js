/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
import { selectedFilter } from 'helpers';
export class SchoolBoxComponent extends BaseDataComponent {
    /**
     * @param {?} requestService
     */
    constructor(requestService) {
        super();
        this.requestService = requestService;
        this.schoolParams = new Subject();
        this.size = 6;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.params.size = this.size;
        this.initFilterSubscription();
        this.populateTable();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    setSchoolData(response) {
        const { data: { result, page }, } = response;
        this.loading = false;
        this.schools = result || [];
        this.isEmpty = this.schools.length === 0;
    }
    /**
     * @private
     * @return {?}
     */
    initFilterSubscription() {
        this.subscription.add(this.schoolParams.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => {
            if (key === 'state' && this.params.lga) {
                delete this.params.lga;
            }
            this.params = selectedFilter(this.params, key, value);
            this.populateTable();
        })));
    }
    /**
     * @return {?}
     */
    populateTable() {
        this.loading = true;
        this.schools = [];
        this.subscription.add(this.requestService.searchSchools(this.params).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.setSchoolData(response);
        }), (/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.loading = false;
            this.isError = true;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SchoolBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-school-box',
                template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ school.contact.phone }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ school.contact.phone }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
            }] }
];
/** @nocollapse */
SchoolBoxComponent.ctorParameters = () => [
    { type: RequestService }
];
SchoolBoxComponent.propDecorators = {
    schoolParams: [{ type: Input }],
    size: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hvb2wtYm94L3NjaG9vbC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU16QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCOzs7O0lBTXZELFlBQW9CLGNBQThCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRFUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSHpDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixTQUFJLEdBQUcsQ0FBQyxDQUFDO0lBSWxCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFFBQWE7Y0FDM0IsRUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQ3ZCLEdBQUcsUUFBUTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQzdDLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDdEQsUUFBUSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7Ozs7UUFDRCxDQUFDLENBQUMsRUFBRTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG0vREFBMEM7YUFDM0M7Ozs7WUFSUSxjQUFjOzs7MkJBWXBCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUZOLHFDQUF5Qjs7SUFDekIsMENBQXNDOztJQUN0QyxrQ0FBa0I7Ozs7O0lBRU4sNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaG9vbCB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hvb2wnO1xuaW1wb3J0IHsgUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzZURhdGFDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWRhdGEtY29tcG9uZW50JztcbmltcG9ydCB7IHNlbGVjdGVkRmlsdGVyIH0gZnJvbSAnaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zY2hvb2wtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaG9vbC1ib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2hvb2xCb3hDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0YUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNjaG9vbHM6IFNjaG9vbFtdO1xuICBASW5wdXQoKSBzY2hvb2xQYXJhbXMgPSBuZXcgU3ViamVjdCgpO1xuICBASW5wdXQoKSBzaXplID0gNjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcXVlc3RTZXJ2aWNlOiBSZXF1ZXN0U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtcy5zaXplID0gdGhpcy5zaXplO1xuICAgIHRoaXMuaW5pdEZpbHRlclN1YnNjcmlwdGlvbigpO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTY2hvb2xEYXRhKHJlc3BvbnNlOiBhbnkpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHJlc3VsdCwgcGFnZSB9LFxuICAgIH0gPSByZXNwb25zZTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNjaG9vbHMgPSByZXN1bHQgfHwgW107XG4gICAgdGhpcy5pc0VtcHR5ID0gdGhpcy5zY2hvb2xzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZpbHRlclN1YnNjcmlwdGlvbigpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnNjaG9vbFBhcmFtcy5zdWJzY3JpYmUoKHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScgJiYgdGhpcy5wYXJhbXMubGdhKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucGFyYW1zLmxnYTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtcyA9IHNlbGVjdGVkRmlsdGVyKHRoaXMucGFyYW1zLCBrZXksIHZhbHVlKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVRhYmxlKCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcG9wdWxhdGVUYWJsZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2Nob29scyA9IFtdO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucmVxdWVzdFNlcnZpY2Uuc2VhcmNoU2Nob29scyh0aGlzLnBhcmFtcykuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTY2hvb2xEYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgXyA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==