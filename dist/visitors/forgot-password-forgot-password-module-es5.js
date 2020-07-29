(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Recover Password!\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form role=\"form\" class=\"form pl-4 position-relative pr-4 pt-5\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email Address</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"email\" />\n            </div>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Send me recovery link'\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Back to\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Log in</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "../../node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");






var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
                    },
                ]),
            ],
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map