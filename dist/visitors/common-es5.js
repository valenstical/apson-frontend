(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/contact-box/contact-box.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/contact-box/contact-box.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"contact-form form\"\n  [formGroup]=\"formGroup\"\n  (submit)=\"sendMessage()\"\n>\n  <lib-alert\n    [message]=\"response.message\"\n    [title]=\"response.title\"\n    [type]=\"response.type\"\n    *ngIf=\"!hideAlert\"\n  ></lib-alert>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"name\"\n        type=\"text\"\n        title=\"Your name\"\n        [formData]=\"formGroup\"\n        invalidText=\"Your name is required\"\n      ></lib-input>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>Subject</label>\n        <select\n          id=\"subject\"\n          class=\"form-control custom-select\"\n          name=\"subject\"\n          formControlName=\"subject\"\n        >\n          <option [value]=\"subject\" *ngFor=\"let subject of subjects\">{{\n            subject\n          }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"email\"\n        type=\"email\"\n        title=\"Email\"\n        [formData]=\"formGroup\"\n        invalidText=\"A valid email address is required\"\n      ></lib-input>\n    </div>\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"phone\"\n        type=\"tel\"\n        title=\"Phone\"\n        [formData]=\"formGroup\"\n        invalidText=\"Phone number is required\"\n      ></lib-input>\n    </div>\n  </div>\n  <lib-input\n    name=\"message\"\n    type=\"textarea\"\n    title=\"Message\"\n    [formData]=\"formGroup\"\n    invalidText=\"Enter the message you wish to send.\"\n  ></lib-input>\n  <div class=\"mt-4\">\n    <lib-submit-button\n      text=\"Send Message\"\n      [disabled]=\"isBusy || formGroup.invalid\"\n      [isBusy]=\"isBusy\"\n    ></lib-submit-button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/message-box/message-box.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/message-box/message-box.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 shadow-raised card empty-data \"\n>\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" class=\"w-100 img-max-300\" />\n    <h4 class=\"empty-data-title mt-5 text-capitalize mb-4\">{{ title }}</h4>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n    <p class=\"empty-data-description mb-4\" *ngIf=\"action == ACTION.PAYMENT\">\n      As a member of APSON you are required to pay our annual membership fee to\n      get access to all benefits of the association including;\n    </p>\n    <ul\n      class=\"fa-ul d-inline-block mt-2 empty-data-description\"\n      *ngIf=\"highlight.length !== 0\"\n    >\n      <li class=\"text-left pl-3 mb-2\" *ngFor=\"let item of highlight\">\n        <i class=\"fas fa-check fa-li text-success\"></i>\n        {{ item }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"text-center mb-2\" *ngIf=\"action !== ACTION.EMPTY_DATA\">\n    <lib-submit-button\n      [text]=\"buttonText\"\n      [type]=\"'button'\"\n      (btnClick)=\"onClick($event)\"\n      [maxWidth]=\"''\"\n      [isBusy]=\"isBusy\"\n    >\n    </lib-submit-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-box/contact-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact-box/contact-box.component.ts ***!
  \******************************************************/
/*! exports provided: ContactBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBoxComponent", function() { return ContactBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm5/helpers.js");





var ContactBoxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactBoxComponent, _super);
    function ContactBoxComponent(formBuilder, requestService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.requestService = requestService;
        _this.receiver = helpers__WEBPACK_IMPORTED_MODULE_4__["APSON_EMAIL"];
        _this.subjects = ['Enquiry', 'Complaint'];
        _this.formGroup = _this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receiver: [_this.receiver],
        });
        return _this;
    }
    ContactBoxComponent.prototype.ngOnInit = function () {
        this.formGroup.controls.subject.setValue(this.subjects[0]);
    };
    ContactBoxComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    ContactBoxComponent.prototype.sendMessage = function () {
        var _this = this;
        this.toggleLoaders(true);
        this.subscription.add(this.requestService.post('contact', this.formGroup.value).subscribe(function () {
            _this.toggleLoaders(false);
            Object(helpers__WEBPACK_IMPORTED_MODULE_4__["scrollIntoView"])(_this.scrollView);
            _this.formGroup.reset({
                name: '',
                phone: '',
                message: '',
                email: '',
                subject: 'Enquiry',
                receiver: _this.receiver,
            });
            _this.showMessage('Thank you for your message. Our representative will contact you shortly.', 'Message Sent', 'success');
        }, function (error) {
            _this.handleError(error);
        }));
    };
    ContactBoxComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ContactBoxComponent.prototype, "scrollView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ContactBoxComponent.prototype, "receiver", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ContactBoxComponent.prototype, "subjects", void 0);
    ContactBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-box',
            template: __webpack_require__(/*! raw-loader!./contact-box.component.html */ "../../node_modules/raw-loader/index.js!./src/app/contact-box/contact-box.component.html"),
        })
    ], ContactBoxComponent);
    return ContactBoxComponent;
}(shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/contact-box/contact-box.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-box/contact-box.module.ts ***!
  \***************************************************/
/*! exports provided: ContactBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBoxModule", function() { return ContactBoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-box.component */ "./src/app/contact-box/contact-box.component.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");





var ContactBoxModule = /** @class */ (function () {
    function ContactBoxModule() {
    }
    ContactBoxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_box_component__WEBPACK_IMPORTED_MODULE_2__["ContactBoxComponent"]],
            exports: [_contact_box_component__WEBPACK_IMPORTED_MODULE_2__["ContactBoxComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        })
    ], ContactBoxModule);
    return ContactBoxModule;
}());



/***/ }),

/***/ "./src/app/members/message-box/message-box.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/message-box/message-box.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(router) {
        this.router = router;
        this.ACTION = {
            PAYMENT: 0,
            NOT_FOUND: 1,
            EMPTY_DATA: 2,
        };
        this.icons = [
            'assets/images/icons/deal.svg',
            'assets/images/icons/not-found.svg',
            'assets/images/icons/empty.svg',
        ];
        this.titles = ['Pay membership fee', 'PAGE NOT FOUND!', 'NO RESULT FOUND!'];
        this.buttonTexts = ['Pay membership fee', 'Go home', ''];
        this.highlights = [
            [
                'Your authenticated membership certificate, signed and approved will be sent to your email.',
                'Add your school to our online directory so it can be easily discovered by everyone.',
                'FREE access to our central school management system for your students.',
                '100% Support from the APSON family.',
            ],
            [],
            [],
        ];
        this.messages = [
            'Congratulations on taking the first step to becoming a member of our great association.',
            "We can't seem to find the page you're looking for.",
            "We couldn't find anything matching your search. Try searching other keywords.",
        ];
        this.isBusy = false;
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
        this.icon = this.icon || this.icons[this.action];
        this.title = this.title || this.titles[this.action];
        this.highlight = this.highlight || this.highlights[this.action];
        this.message = this.message || this.messages[this.action];
    };
    MessageBoxComponent.prototype.onClick = function (event) {
        if (this.path) {
            this.router.navigate(["/" + this.path]);
            return;
        }
        this.btnClick.emit(event);
    };
    MessageBoxComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "isBusy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "highlight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MessageBoxComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MessageBoxComponent.prototype, "btnClick", void 0);
    MessageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-box',
            template: __webpack_require__(/*! raw-loader!./message-box.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/message-box/message-box.component.html"),
        })
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "./src/app/members/message-box/message-box.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/members/message-box/message-box.module.ts ***!
  \***********************************************************/
/*! exports provided: MessageBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxModule", function() { return MessageBoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _message_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-box.component */ "./src/app/members/message-box/message-box.component.ts");





var MessageBoxModule = /** @class */ (function () {
    function MessageBoxModule() {
    }
    MessageBoxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_message_box_component__WEBPACK_IMPORTED_MODULE_4__["MessageBoxComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_message_box_component__WEBPACK_IMPORTED_MODULE_4__["MessageBoxComponent"]],
        })
    ], MessageBoxModule);
    return MessageBoxModule;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map