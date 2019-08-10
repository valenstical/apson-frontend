(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('ngx-cacheable'), require('@angular/common/http'), require('helpers'), require('rxjs/operators'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('shared', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'ngx-cacheable', '@angular/common/http', 'helpers', 'rxjs/operators', '@angular/router'], factory) :
    (global = global || self, factory(global.shared = {}, global.ng.core, global.ng.common, global.ng.forms, global.rxjs, global.ngxCacheable, global.ng.common.http, global.helpers, global.rxjs.operators, global.ng.router));
}(this, function (exports, core, common, forms, rxjs, ngxCacheable, http, helpers, operators, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

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
            this.btnClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-submit-button',
                        template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
                    }] }
        ];
        /** @nocollapse */
        SubmitButtonComponent.ctorParameters = function () { return []; };
        SubmitButtonComponent.propDecorators = {
            isBusy: [{ type: core.Input }],
            text: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            type: [{ type: core.Input }],
            maxWidth: [{ type: core.Input }],
            btnClick: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'lib-input',
                        template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <ng-container *ngIf=\"type === 'textarea'; else textfield\">\n    <textarea\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      >{{ formData.controls[name].value }}\n</textarea\n    >\n  </ng-container>\n  <ng-template #textfield>\n    <input\n      type=\"{{ type }}\"\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      [value]=\"formData.controls[name].value\"\n    />\n  </ng-template>\n\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
                    }] }
        ];
        InputComponent.propDecorators = {
            name: [{ type: core.Input }],
            title: [{ type: core.Input }],
            type: [{ type: core.Input }],
            formData: [{ type: core.Input }],
            invalidText: [{ type: core.Input }]
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
            this.whenSelected = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-select',
                        template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\">{{ title }}\n    <img *ngIf=\"isLoading\" src=\"/assets/images/icons/loading.gif\" width=\"20\" /></label>\n  <select class=\"form-control custom-select\" [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\" (change)=\"notifyChange(formData.controls[name].value)\"\n    [attr.disabled]=\"disabled || isLoading ? 'true' : null\">\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n      {{ item }}</option>\n  </select>\n  <span class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\">{{ invalidText }}.</span>\n</div>"
                    }] }
        ];
        SelectComponent.propDecorators = {
            name: [{ type: core.Input }],
            title: [{ type: core.Input }],
            data: [{ type: core.Input }],
            formData: [{ type: core.Input }],
            invalidText: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            whenSelected: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'lib-busy',
                        template: "<div class=\"busy text-center\">\n  <img src=\"/assets/images/icons/busy.gif\" width=\"120\" />\n  <p>{{ text }}</p>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        BusyComponent.ctorParameters = function () { return []; };
        BusyComponent.propDecorators = {
            text: [{ type: core.Input }]
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
            return this.http[method](helpers.BASE_URL + "/" + endpoint, params);
        };
        HttpService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HttpService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ HttpService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(core.ɵɵinject(http.HttpClient)); }, token: HttpService, providedIn: "root" });
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
         * @param {?} id
         * @return {?}
         */
        RequestService.prototype.getSchool = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.get("schools/" + id);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        RequestService.ctorParameters = function () { return [
            { type: HttpService }
        ]; };
        /** @nocollapse */ RequestService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function RequestService_Factory() { return new RequestService(core.ɵɵinject(HttpService)); }, token: RequestService, providedIn: "root" });
        __decorate([
            ngxCacheable.Cacheable({
                maxCacheCount: 1000,
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", rxjs.Observable)
        ], RequestService.prototype, "searchSchools", null);
        __decorate([
            ngxCacheable.Cacheable({
                maxCacheCount: 1000,
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", rxjs.Observable)
        ], RequestService.prototype, "getSchool", null);
        return RequestService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseComponent = /** @class */ (function () {
        function BaseComponent() {
            this.subscription = new rxjs.Subscription();
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
        function () {
            BaseComponent.showMenu = !BaseComponent.showMenu;
        };
        BaseComponent.showMenu = false;
        return BaseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
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
                .pipe(operators.tap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this[loader] = true;
            })), operators.debounceTime(this.debouceTime), operators.tap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this[loader] = false;
            })), operators.distinctUntilChanged())
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
            this.params = helpers.selectedFilter(this.params, key, value);
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
            _this.schoolParams = new rxjs.Subject();
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
            return helpers.toMobileNumber(phone);
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
                _this.params = helpers.selectedFilter(_this.params, key, value);
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
            { type: core.Component, args: [{
                        selector: 'lib-school-box',
                        template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ getMobileNumber(school.contact.phone) }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title text-capitalize\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\" class=\"text-sentence\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ getMobileNumber(school.contact.phone) }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
                    }] }
        ];
        /** @nocollapse */
        SchoolBoxComponent.ctorParameters = function () { return [
            { type: RequestService }
        ]; };
        SchoolBoxComponent.propDecorators = {
            schoolParams: [{ type: core.Input }],
            size: [{ type: core.Input }]
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
            this.whenSelected = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-simple-select',
                        template: "<select\n  class=\"form-control custom-select\"\n  [value]=\"defaultValue\"\n  (change)=\"notifyChange($event.target.value)\"\n>\n  <option value=\"\">{{ placeholder }}</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option\n  >\n</select>\n"
                    }] }
        ];
        SimpleSelectComponent.propDecorators = {
            data: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            defaultValue: [{ type: core.Input }],
            whenSelected: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'lib-not-found-box',
                        template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        NotFoundComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        NotFoundComponent.propDecorators = {
            icon: [{ type: core.Input }],
            message: [{ type: core.Input }],
            title: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'lib-back-button',
                        template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
                    }] }
        ];
        /** @nocollapse */
        BackButtonComponent.ctorParameters = function () { return [
            { type: common.Location }
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
            { type: core.Component, args: [{
                        selector: 'lib-alert',
                        template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
                    }] }
        ];
        AlertComponent.propDecorators = {
            type: [{ type: core.Input }],
            title: [{ type: core.Input }],
            message: [{ type: core.Input }]
        };
        return AlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageTransitionComponent = /** @class */ (function (_super) {
        __extends(PageTransitionComponent, _super);
        function PageTransitionComponent(router) {
            var _this = _super.call(this) || this;
            _this.router = router;
            _this.activeChange = new core.EventEmitter();
            _this.loading = false;
            return _this;
        }
        /**
         * @return {?}
         */
        PageTransitionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.subscription.add(this.router.events.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                BaseComponent.showMenu = false;
                if (event instanceof router.RouteConfigLoadStart) {
                    _this.loading = true;
                }
                else if (event instanceof router.RouteConfigLoadEnd) {
                    _this.loading = false;
                }
            })));
        };
        /**
         * @return {?}
         */
        PageTransitionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.subscription.unsubscribe();
        };
        PageTransitionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-page-transition',
                        template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        PageTransitionComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        PageTransitionComponent.propDecorators = {
            activeChange: [{ type: core.Output }]
        };
        return PageTransitionComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
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
                            PageTransitionComponent,
                        ],
                        imports: [common.CommonModule, router.RouterModule, forms.FormsModule, forms.ReactiveFormsModule],
                        exports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            BackButtonComponent,
                            SubmitButtonComponent,
                            AlertComponent,
                            InputComponent,
                            SelectComponent,
                            BusyComponent,
                            SimpleSelectComponent,
                            SchoolBoxComponent,
                            NotFoundComponent,
                            PageTransitionComponent,
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
            this.url = 'members';
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
                this.member = new rxjs.Subject();
            }
        };
        /**
         * @return {?}
         */
        AuthService.prototype.gotoMembers = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('/members');
        };
        /**
         * @return {?}
         */
        AuthService.prototype.gotoVisitors = /**
         * @return {?}
         */
        function () {
            this.router.navigateByUrl('/');
        };
        /**
         * @return {?}
         */
        AuthService.prototype.gotoStudents = /**
         * @return {?}
         */
        function () {
            location.assign(helpers.STUDENTS_URL);
        };
        /**
         * @return {?}
         */
        AuthService.prototype.gotoAdmin = /**
         * @return {?}
         */
        function () {
            location.assign(helpers.ADMIN_URL);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () { return [
            { type: router.Router },
            { type: HttpService }
        ]; };
        /** @nocollapse */ AuthService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(core.ɵɵinject(router.Router), core.ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });
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
            return next.handle(request).pipe(operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                if (err.status === 401) {
                    _this.authService.logout();
                }
                return rxjs.throwError(err);
            })));
        };
        InterceptorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        InterceptorService.ctorParameters = function () { return [
            { type: AuthService }
        ]; };
        /** @nocollapse */ InterceptorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(core.ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });
        return InterceptorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SchoolService = /** @class */ (function () {
        function SchoolService() {
            this.school = new rxjs.BehaviorSubject(null);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SchoolService.ctorParameters = function () { return []; };
        /** @nocollapse */ SchoolService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ScriptLoaderService.ctorParameters = function () { return []; };
        /** @nocollapse */ ScriptLoaderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActiveMemberGuard = /** @class */ (function () {
        function ActiveMemberGuard(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        ActiveMemberGuard.prototype.canActivate = /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        function (next, state) {
            /** @type {?} */
            var isActive = this.authService.getMember().isActive;
            if (!isActive) {
                this.router.navigateByUrl('/members/membership-renewal');
            }
            return isActive;
        };
        ActiveMemberGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ActiveMemberGuard.ctorParameters = function () { return [
            { type: AuthService },
            { type: router.Router }
        ]; };
        /** @nocollapse */ ActiveMemberGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ActiveMemberGuard_Factory() { return new ActiveMemberGuard(core.ɵɵinject(AuthService), core.ɵɵinject(router.Router)); }, token: ActiveMemberGuard, providedIn: "root" });
        return ActiveMemberGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        AuthGuard.prototype.canActivate = /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        function (next, state) {
            /** @type {?} */
            var authenticated = this.authService.isLoggedIn(state.url);
            if (!authenticated) {
                this.router.navigateByUrl('/login');
            }
            return authenticated;
        };
        AuthGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () { return [
            { type: AuthService },
            { type: router.Router }
        ]; };
        /** @nocollapse */ AuthGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(core.ɵɵinject(AuthService), core.ɵɵinject(router.Router)); }, token: AuthGuard, providedIn: "root" });
        return AuthGuard;
    }());

    exports.ActiveMemberGuard = ActiveMemberGuard;
    exports.AuthGuard = AuthGuard;
    exports.AuthService = AuthService;
    exports.BaseComponent = BaseComponent;
    exports.BaseDataComponent = BaseDataComponent;
    exports.HttpService = HttpService;
    exports.InterceptorService = InterceptorService;
    exports.Member = Member;
    exports.RequestService = RequestService;
    exports.School = School;
    exports.SchoolService = SchoolService;
    exports.ScriptLoaderService = ScriptLoaderService;
    exports.ScriptStore = ScriptStore;
    exports.SharedModule = SharedModule;
    exports.ɵa = BackButtonComponent;
    exports.ɵb = SubmitButtonComponent;
    exports.ɵc = AlertComponent;
    exports.ɵd = InputComponent;
    exports.ɵe = SelectComponent;
    exports.ɵf = SimpleSelectComponent;
    exports.ɵg = BusyComponent;
    exports.ɵh = SchoolBoxComponent;
    exports.ɵi = NotFoundComponent;
    exports.ɵj = PageTransitionComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=shared.umd.js.map
