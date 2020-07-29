(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["make-payment-make-payment-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/make-payment/make-payment.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/make-payment/make-payment.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<lib-alert\n  [title]=\"response.title\"\n  [type]=\"response.type\"\n  [message]=\"response.message\"\n  *ngIf=\"!hideAlert\"\n></lib-alert>\n<app-message-box\n  [action]=\"'0'\"\n  [buttonText]=\"'Pay membership fee'\"\n  (btnClick)=\"startPayment()\"\n  [isBusy]=\"isBusy\"\n></app-message-box>\n"

/***/ }),

/***/ "./src/app/members/make-payment/make-payment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/make-payment/make-payment.component.ts ***!
  \****************************************************************/
/*! exports provided: MakePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm5/helpers.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");






var MakePaymentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MakePaymentComponent, _super);
    function MakePaymentComponent(requestServie, scriptLoaderService, authService, router, commonService) {
        var _this = _super.call(this) || this;
        _this.requestServie = requestServie;
        _this.scriptLoaderService = scriptLoaderService;
        _this.authService = authService;
        _this.router = router;
        _this.commonService = commonService;
        _this.isBusy = false;
        return _this;
    }
    MakePaymentComponent.prototype.ngOnInit = function () {
        this.commonService.setPageTitle('Make Payment');
    };
    MakePaymentComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    MakePaymentComponent.prototype.validatePayment = function (ref) {
        var _this = this;
        this.subscription.add(this.requestServie.validatePayment(ref).subscribe(function (_) {
            _this.isBusy = false;
            var member = _this.authService.getMember();
            _this.authService.setMember(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, member, { isActive: true }));
            _this.router.navigateByUrl('/members/dashboard');
        }, function (error) {
            _this.handleError(error);
        }));
    };
    MakePaymentComponent.prototype.openPaystack = function (data) {
        var _this = this;
        this.paystackWidget = new helpers__WEBPACK_IMPORTED_MODULE_4__["PaystackWidget"](data, function (response) {
            _this.validatePayment(response.reference);
        }, function () {
            _this.isBusy = false;
        });
        this.paystackWidget.open();
    };
    MakePaymentComponent.prototype.processPayment = function (data) {
        var _this = this;
        if (!this.paystackWidget) {
            this.scriptLoaderService.load('paystack').then(function () {
                _this.openPaystack(data);
            });
        }
        else {
            this.openPaystack(data);
        }
    };
    MakePaymentComponent.prototype.startPayment = function () {
        var _this = this;
        this.isBusy = true;
        this.subscription.add(this.requestServie
            .requestPayment('plan_membership_fee')
            .subscribe(function (response) {
            var data = response.data;
            _this.processPayment(data);
        }));
    };
    MakePaymentComponent.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    MakePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-make-payment',
            template: __webpack_require__(/*! raw-loader!./make-payment.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/make-payment/make-payment.component.html"),
        })
    ], MakePaymentComponent);
    return MakePaymentComponent;
}(shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/members/make-payment/make-payment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/make-payment/make-payment.module.ts ***!
  \*************************************************************/
/*! exports provided: MakePaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentModule", function() { return MakePaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _make_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-payment.component */ "./src/app/members/make-payment/make-payment.component.ts");
/* harmony import */ var _message_box_message_box_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message-box/message-box.module */ "./src/app/members/message-box/message-box.module.ts");







var MakePaymentModule = /** @class */ (function () {
    function MakePaymentModule() {
    }
    MakePaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_make_payment_component__WEBPACK_IMPORTED_MODULE_5__["MakePaymentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _message_box_message_box_module__WEBPACK_IMPORTED_MODULE_6__["MessageBoxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _make_payment_component__WEBPACK_IMPORTED_MODULE_5__["MakePaymentComponent"],
                    },
                ]),
            ],
        })
    ], MakePaymentModule);
    return MakePaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=make-payment-make-payment-module-es5.js.map