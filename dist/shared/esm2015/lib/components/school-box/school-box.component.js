/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
import { selectedFilter, toMobileNumber } from 'helpers';
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
     * @param {?} phone
     * @return {?}
     */
    getMobileNumber(phone) {
        return toMobileNumber(phone);
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
                template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ getMobileNumber(school.contact.phone) }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title text-capitalize\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\" class=\"text-sentence\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ getMobileNumber(school.contact.phone) }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hvb2wtYm94L3NjaG9vbC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNekQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGlCQUFpQjs7OztJQU12RCxZQUFvQixjQUE4QjtRQUNoRCxLQUFLLEVBQUUsQ0FBQztRQURVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh6QyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsU0FBSSxHQUFHLENBQUMsQ0FBQztJQUlsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUFhO2NBQzNCLEVBQ0osSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUN2QixHQUFHLFFBQVE7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBYTtRQUMzQixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQzdDLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDdEQsUUFBUSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7Ozs7UUFDRCxDQUFDLENBQUMsRUFBRTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZqRUFBMEM7YUFDM0M7Ozs7WUFSUSxjQUFjOzs7MkJBWXBCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUZOLHFDQUF5Qjs7SUFDekIsMENBQXNDOztJQUN0QyxrQ0FBa0I7Ozs7O0lBRU4sNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaG9vbCB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hvb2wnO1xuaW1wb3J0IHsgUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzZURhdGFDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWRhdGEtY29tcG9uZW50JztcbmltcG9ydCB7IHNlbGVjdGVkRmlsdGVyLCB0b01vYmlsZU51bWJlciB9IGZyb20gJ2hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2Nob29sLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hvb2wtYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2Nob29sQm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZURhdGFDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBzY2hvb2xzOiBTY2hvb2xbXTtcbiAgQElucHV0KCkgc2Nob29sUGFyYW1zID0gbmV3IFN1YmplY3QoKTtcbiAgQElucHV0KCkgc2l6ZSA9IDY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXF1ZXN0U2VydmljZTogUmVxdWVzdFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLmluaXRGaWx0ZXJTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnBvcHVsYXRlVGFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2Nob29sRGF0YShyZXNwb25zZTogYW55KSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyByZXN1bHQsIHBhZ2UgfSxcbiAgICB9ID0gcmVzcG9uc2U7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zY2hvb2xzID0gcmVzdWx0IHx8IFtdO1xuICAgIHRoaXMuaXNFbXB0eSA9IHRoaXMuc2Nob29scy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXRNb2JpbGVOdW1iZXIocGhvbmU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRvTW9iaWxlTnVtYmVyKHBob25lKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZpbHRlclN1YnNjcmlwdGlvbigpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnNjaG9vbFBhcmFtcy5zdWJzY3JpYmUoKHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScgJiYgdGhpcy5wYXJhbXMubGdhKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucGFyYW1zLmxnYTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtcyA9IHNlbGVjdGVkRmlsdGVyKHRoaXMucGFyYW1zLCBrZXksIHZhbHVlKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVRhYmxlKCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcG9wdWxhdGVUYWJsZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2Nob29scyA9IFtdO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucmVxdWVzdFNlcnZpY2Uuc2VhcmNoU2Nob29scyh0aGlzLnBhcmFtcykuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTY2hvb2xEYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgXyA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==