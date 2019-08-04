import { EventEmitter, Component, Input, Output, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
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
class SubmitButtonComponent {
    constructor() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    }
}
SubmitButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-submit-button',
                template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
            }] }
];
/** @nocollapse */
SubmitButtonComponent.ctorParameters = () => [];
SubmitButtonComponent.propDecorators = {
    isBusy: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    maxWidth: [{ type: Input }],
    btnClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() {
        this.type = 'text';
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-input',
                template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <input\n    type=\"{{ type }}\"\n    class=\"form-control\"\n    id=\"{{ name }}\"\n    [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\"\n  />\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
            }] }
];
InputComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    type: [{ type: Input }],
    formData: [{ type: Input }],
    invalidText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.data = [];
        this.disabled = false;
        this.isLoading = false;
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    notifyChange(event) {
        this.whenSelected.emit(event);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BusyComponent {
    constructor() {
        this.text = 'Please wait...';
    }
}
BusyComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-busy',
                template: "<div class=\"busy text-center\">\n  <img src=\"/assets/images/icons/busy.gif\" width=\"120\" />\n  <p>{{ text }}</p>\n</div>\n"
            }] }
];
/** @nocollapse */
BusyComponent.ctorParameters = () => [];
BusyComponent.propDecorators = {
    text: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    request(endpoint, params, method) {
        return this.http[method](`${BASE_URL}/${endpoint}`, params);
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(ɵɵinject(HttpClient)); }, token: HttpService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateMember(data) {
        return this.http.request('members', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfileImage(data) {
        return this.http.request('members/image', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    registerMember(data) {
        return this.http.request('members', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} paymentType
     * @return {?}
     */
    requestPayment(paymentType) {
        return this.http.request('payments/request', { params: { paymentType } }, 'get');
    }
    /**
     * @param {?} query
     * @return {?}
     */
    searchSchools(query) {
        return this.get('schools', query);
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    validatePayment(ref) {
        return this.http.request('payments', { ref }, 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    post(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    patch(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    get(endpoint, data = {}) {
        return this.http.request(endpoint, { params: data }, 'get');
    }
}
RequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RequestService.ctorParameters = () => [
    { type: HttpService }
];
/** @nocollapse */ RequestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RequestService_Factory() { return new RequestService(ɵɵinject(HttpService)); }, token: RequestService, providedIn: "root" });
__decorate([
    Cacheable(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], RequestService.prototype, "searchSchools", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseDataComponent extends BaseComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchoolBoxComponent extends BaseDataComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleSelectComponent {
    constructor() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    notifyChange(value) {
        this.whenSelected.emit(value);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.icon = 'assets/images/icons/empty.svg';
    }
}
NotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-not-found-box',
                template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NotFoundComponent.ctorParameters = () => [
    { type: Router }
];
NotFoundComponent.propDecorators = {
    icon: [{ type: Input }],
    message: [{ type: Input }],
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BackButtonComponent {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    goBack() {
        this.location.back();
    }
}
BackButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-back-button',
                template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
            }] }
];
/** @nocollapse */
BackButtonComponent.ctorParameters = () => [
    { type: Location }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} router
     * @param {?} httpService
     */
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = MEMBERS_URL;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    login(data) {
        return this.httpService.request('members/login', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} member
     * @return {?}
     */
    setMember(member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    }
    /**
     * @return {?}
     */
    getMember() {
        /** @type {?} */
        const member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    }
    /**
     * @return {?}
     */
    logout() {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    }
    /**
     * @private
     * @return {?}
     */
    initMember() {
        if (!this.member) {
            this.member = new Subject();
        }
    }
    /**
     * @return {?}
     */
    gotoMembers() {
        location.assign(MEMBERS_URL);
    }
    /**
     * @return {?}
     */
    gotoVisitors() {
        location.assign(VISITORS_URL);
    }
    /**
     * @return {?}
     */
    gotoStudents() {
        location.assign(STUDENTS_URL);
    }
    /**
     * @return {?}
     */
    gotoAdmin() {
        location.assign(ADMIN_URL);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isLoggedIn(url) {
        this.url = url;
        /** @type {?} */
        const member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Router },
    { type: HttpService }
];
/** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Router), ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InterceptorService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const member = this.authService.getMember();
        if (member) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${member.token}`,
                },
            });
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            if (err.status === 401) {
                this.authService.logout();
            }
            return throwError(err);
        })));
    }
}
InterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
InterceptorService.ctorParameters = () => [
    { type: AuthService }
];
/** @nocollapse */ InterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchoolService {
    constructor() {
        this.school = new BehaviorSubject(null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    setValue(school) {
        this.school.next(school);
    }
    /**
     * @return {?}
     */
    get() {
        return this.school;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.school.getValue();
    }
}
SchoolService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SchoolService.ctorParameters = () => [];
/** @nocollapse */ SchoolService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ScriptStore = [
    {
        name: 'cloudinary',
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
    },
    { name: 'paystack', src: 'https://js.paystack.co/v1/inline.js' },
];
class ScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        (script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    load(...scripts) {
        /** @type {?} */
        const promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        script => promises.push(this.loadScript(script))));
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.scripts[name].loaded) {
                /** @type {?} */
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    script.onreadystatechange = (/**
                     * @return {?}
                     */
                    () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    });
                }
                else {
                    script.onload = (/**
                     * @return {?}
                     */
                    () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    });
                }
                script.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => resolve({ script: name, loaded: false, status: 'Loaded' }));
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        }));
    }
}
ScriptLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ScriptLoaderService.ctorParameters = () => [];
/** @nocollapse */ ScriptLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Member {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class School {
}

export { AuthService, BaseComponent, BaseDataComponent, HttpService, InterceptorService, Member, RequestService, School, SchoolService, ScriptLoaderService, ScriptStore, SharedModule, BackButtonComponent as ɵa, SubmitButtonComponent as ɵb, AlertComponent as ɵc, InputComponent as ɵd, SelectComponent as ɵe, SimpleSelectComponent as ɵf, BusyComponent as ɵg, SchoolBoxComponent as ɵh, NotFoundComponent as ɵi };
//# sourceMappingURL=shared.js.map
