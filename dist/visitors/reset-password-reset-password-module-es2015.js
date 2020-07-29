(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <a\n              routerLink=\"/login\"\n              class=\"link-back transition text-white d-inline-block mt-4\"\n              ><i class=\"fas fa-arrow-left\"></i\n            ></a>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Reset Password\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form role=\"form\" class=\"form pl-4 position-relative pr-4 pt-5\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">New Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"name\"\n                name=\"password\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Re-enter new password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"name\"\n                name=\"password2\"\n              />\n            </div>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Reset my password'\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Back to\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Login</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() { }
};
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "../../node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html"),
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");






let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"],
                },
            ]),
        ],
    })
], ResetPasswordModule);



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es2015.js.map