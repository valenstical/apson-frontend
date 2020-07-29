(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/login/login.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Log in to APSON\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form\n            class=\"form pl-4 position-relative pr-4 pt-5\"\n            (ngSubmit)=\"onLogin()\"\n            novalidate\n          >\n            <lib-alert\n              [title]=\"response.title\"\n              [type]=\"response.type\"\n              [message]=\"response.message\"\n              *ngIf=\"!hideAlert\"\n            ></lib-alert>\n            <div class=\"form-group\">\n              <label for=\"username\">Email Address or Phone Number</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"name\"\n                [formControl]=\"formData.get('username')\"\n                [value]=\"formData.get('username').value\"\n              />\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('username').invalid &&\n                  (formData.get('username').dirty ||\n                    formData.get('username').touched)\n                \"\n                >Enter your email or phone number</span\n              >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"password\"\n                [formControl]=\"formData.get('password')\"\n                [value]=\"formData.get('password').value\"\n              />\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('password').invalid &&\n                  (formData.get('password').dirty ||\n                    formData.get('password').touched)\n                \"\n                >Password is required</span\n              >\n            </div>\n            <div class=\"text-center\">\n              <lib-submit-button\n                [text]=\"'Login to APSON'\"\n                [isBusy]=\"isBusy\"\n                [disabled]=\"formData.invalid\"\n              ></lib-submit-button>\n            </div>\n            <div class=\"text-center mt-5\">\n              <a\n                routerLink=\"/forgot-password/\"\n                class=\"d-inline-block text-muted btn-underlined\"\n                ><small>Forgot Password?</small></a\n              >\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Not a member yet?\n              <a\n                routerLink=\"/register/\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Register Now</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");




var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(formBuilder, authService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.formData = _this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        return _this;
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.toggleLoaders(true);
        this.subscription.add(this.authService.login(this.formData.value).subscribe(function (response) {
            var data = response.data;
            _this.hideAlert = false;
            _this.showMessage('Redirecting you...', 'Log in successful', 'success');
            _this.authService.setMember(data);
            _this.authService.gotoMembers();
        }, function (error) {
            _this.handleError(error);
        }));
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        })
    ], LoginComponent);
    return LoginComponent;
}(shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                    },
                ]),
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map