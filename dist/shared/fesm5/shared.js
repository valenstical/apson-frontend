import { Component, Input, Output, EventEmitter, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __assign, __decorate, __metadata, __extends } from 'tslib';
import { Observable, Subscription, Subject, throwError, BehaviorSubject } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, selectedFilter, MEMBERS_URL, VISITORS_URL, STUDENTS_URL, ADMIN_URL } from 'helpers';
import { tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SubmitButtonComponent = /** @class */ (function () {
    function SubmitButtonComponent() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SubmitButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    SubmitButtonComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    };
    SubmitButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-submit-button',
                    template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    SubmitButtonComponent.ctorParameters = function () { return []; };
    SubmitButtonComponent.propDecorators = {
        isBusy: [{ type: Input }],
        text: [{ type: Input }],
        disabled: [{ type: Input }],
        type: [{ type: Input }],
        maxWidth: [{ type: Input }],
        btnClick: [{ type: Output }]
    };
    return SubmitButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.type = 'text';
    }
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-input',
                    template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <ng-container *ngIf=\"type === 'textarea'; else textfield\">\n    <textarea\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      >{{ formData.controls[name].value }}\n</textarea\n    >\n  </ng-container>\n  <ng-template #textfield>\n    <input\n      type=\"{{ type }}\"\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      [value]=\"formData.controls[name].value\"\n    />\n  </ng-template>\n\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
                }] }
    ];
    InputComponent.propDecorators = {
        name: [{ type: Input }],
        title: [{ type: Input }],
        type: [{ type: Input }],
        formData: [{ type: Input }],
        invalidText: [{ type: Input }]
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.data = [];
        this.disabled = false;
        this.isLoading = false;
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.notifyChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.whenSelected.emit(event);
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-select',
                    template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\">{{ title }}\n    <img *ngIf=\"isLoading\" src=\"/assets/images/icons/loading.gif\" width=\"20\" /></label>\n  <select class=\"form-control custom-select\" [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\" (change)=\"notifyChange(formData.controls[name].value)\"\n    [attr.disabled]=\"disabled || isLoading ? 'true' : null\">\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n      {{ item }}</option>\n  </select>\n  <span class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\">{{ invalidText }}.</span>\n</div>"
                }] }
    ];
    SelectComponent.propDecorators = {
        name: [{ type: Input }],
        title: [{ type: Input }],
        data: [{ type: Input }],
        formData: [{ type: Input }],
        invalidText: [{ type: Input }],
        disabled: [{ type: Input }],
        isLoading: [{ type: Input }],
        whenSelected: [{ type: Output }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BusyComponent = /** @class */ (function () {
    function BusyComponent() {
        this.text = 'Please wait...';
    }
    BusyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-busy',
                    template: "<div class=\"busy text-center\">\n  <img src=\"/assets/images/icons/busy.gif\" width=\"120\" />\n  <p>{{ text }}</p>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    BusyComponent.ctorParameters = function () { return []; };
    BusyComponent.propDecorators = {
        text: [{ type: Input }]
    };
    return BusyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    HttpService.prototype.request = /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    function (endpoint, params, method) {
        return this.http[method](BASE_URL + "/" + endpoint, params);
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(ɵɵinject(HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', __assign({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateProfileImage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members/image', __assign({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.registerMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', __assign({}, data), 'post');
    };
    /**
     * @param {?} paymentType
     * @return {?}
     */
    RequestService.prototype.requestPayment = /**
     * @param {?} paymentType
     * @return {?}
     */
    function (paymentType) {
        return this.http.request('payments/request', { params: { paymentType: paymentType } }, 'get');
    };
    /**
     * @param {?} query
     * @return {?}
     */
    RequestService.prototype.searchSchools = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.get('schools', query);
    };
    /**
     * @param {?} ref
     * @return {?}
     */
    RequestService.prototype.validatePayment = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        return this.http.request('payments', { ref: ref }, 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.post = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, __assign({}, data), 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.patch = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, __assign({}, data), 'patch');
    };
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    RequestService.prototype.get = /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.http.request(endpoint, { params: data }, 'get');
    };
    RequestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RequestService.ctorParameters = function () { return [
        { type: HttpService }
    ]; };
    /** @nocollapse */ RequestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RequestService_Factory() { return new RequestService(ɵɵinject(HttpService)); }, token: RequestService, providedIn: "root" });
    __decorate([
        Cacheable(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], RequestService.prototype, "searchSchools", null);
    return RequestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
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
    BaseComponent.prototype.toggleLoaders = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isBusy = value;
        this.hideAlert = value;
    };
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    BaseComponent.prototype.showMessage = /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    function (message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    };
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    BaseComponent.prototype.arrayValues = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        if (!Array.isArray(array)) {
            return [];
        }
        /** @type {?} */
        var errorGroup = [];
        array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            errorGroup.push(Object.values(element));
        }));
        return errorGroup;
    };
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    BaseComponent.prototype.handleError = /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.toggleLoaders(false);
        var _a = err.error, data = _a.data, message = _a.message;
        data = this.arrayValues(data);
        /** @type {?} */
        var title = data.length === 0 ? '' : message;
        message = title ? data : message;
        this.showMessage(message, title, 'danger');
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () { };
    return BaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BaseDataComponent = /** @class */ (function (_super) {
    __extends(BaseDataComponent, _super);
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchoolBoxComponent = /** @class */ (function (_super) {
    __extends(SchoolBoxComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleSelectComponent = /** @class */ (function () {
    function SimpleSelectComponent() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SimpleSelectComponent.prototype.notifyChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.whenSelected.emit(value);
    };
    SimpleSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-simple-select',
                    template: "<select class=\"form-control custom-select\" [value]=\"defaultValue\" (change)=\"notifyChange($event.target.value)\">\n  <option value=\"\">-- {{placeholder}} --</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option>\n</select>"
                }] }
    ];
    SimpleSelectComponent.propDecorators = {
        data: [{ type: Input }],
        placeholder: [{ type: Input }],
        defaultValue: [{ type: Input }],
        whenSelected: [{ type: Output }]
    };
    return SimpleSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
        this.icon = 'assets/images/icons/empty.svg';
    }
    NotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-not-found-box',
                    template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NotFoundComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    NotFoundComponent.propDecorators = {
        icon: [{ type: Input }],
        message: [{ type: Input }],
        title: [{ type: Input }]
    };
    return NotFoundComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    BackButtonComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    BackButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-back-button',
                    template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
                }] }
    ];
    /** @nocollapse */
    BackButtonComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    return BackButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-alert',
                    template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
                }] }
    ];
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        message: [{ type: Input }]
    };
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BackButtonComponent,
                        SubmitButtonComponent,
                        AlertComponent,
                        InputComponent,
                        SelectComponent,
                        SimpleSelectComponent,
                        BusyComponent,
                        SchoolBoxComponent,
                        NotFoundComponent,
                    ],
                    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
                    exports: [
                        FormsModule,
                        ReactiveFormsModule,
                        BackButtonComponent,
                        SubmitButtonComponent,
                        AlertComponent,
                        InputComponent,
                        SelectComponent,
                        BusyComponent,
                        SimpleSelectComponent,
                        SchoolBoxComponent,
                        NotFoundComponent,
                    ],
                },] }
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = MEMBERS_URL;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.httpService.request('members/login', __assign({}, data), 'post');
    };
    /**
     * @param {?} member
     * @return {?}
     */
    AuthService.prototype.setMember = /**
     * @param {?} member
     * @return {?}
     */
    function (member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getMember = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    };
    /**
     * @private
     * @return {?}
     */
    AuthService.prototype.initMember = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.member) {
            this.member = new Subject();
        }
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoMembers = /**
     * @return {?}
     */
    function () {
        location.assign(MEMBERS_URL);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoVisitors = /**
     * @return {?}
     */
    function () {
        location.assign(VISITORS_URL);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoStudents = /**
     * @return {?}
     */
    function () {
        location.assign(STUDENTS_URL);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoAdmin = /**
     * @return {?}
     */
    function () {
        location.assign(ADMIN_URL);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AuthService.prototype.isLoggedIn = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.url = url;
        /** @type {?} */
        var member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Router },
        { type: HttpService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Router), ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    InterceptorService.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var member = this.authService.getMember();
        if (member) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + member.token,
                },
            });
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            if (err.status === 401) {
                _this.authService.logout();
            }
            return throwError(err);
        })));
    };
    InterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    InterceptorService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    /** @nocollapse */ InterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });
    return InterceptorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchoolService = /** @class */ (function () {
    function SchoolService() {
        this.school = new BehaviorSubject(null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    SchoolService.prototype.setValue = /**
     * @param {?} school
     * @return {?}
     */
    function (school) {
        this.school.next(school);
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.school;
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.school.getValue();
    };
    SchoolService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SchoolService.ctorParameters = function () { return []; };
    /** @nocollapse */ SchoolService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });
    return SchoolService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ScriptStore = [
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
    /** @nocollapse */ ScriptLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
    return ScriptLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var School = /** @class */ (function () {
    function School() {
    }
    return School;
}());

export { AuthService, BaseComponent, BaseDataComponent, HttpService, InterceptorService, Member, RequestService, School, SchoolService, ScriptLoaderService, ScriptStore, SharedModule, BackButtonComponent as ɵa, SubmitButtonComponent as ɵb, AlertComponent as ɵc, InputComponent as ɵd, SelectComponent as ɵe, SimpleSelectComponent as ɵf, BusyComponent as ɵg, SchoolBoxComponent as ɵh, NotFoundComponent as ɵi };
//# sourceMappingURL=shared.js.map
