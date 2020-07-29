(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/register/register.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey min-vh-100\">\n  <div class=\"container-fluid container-1400\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden mw-100\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-register\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title mt-3\">\n              Register with APSON\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form\n            (ngSubmit)=\"onRegisterMember()\"\n            role=\"form\"\n            class=\"form pl-4 position-relative pr-4 pt-5 register\"\n          >\n            <lib-alert\n              [title]=\"response.title\"\n              [type]=\"response.type\"\n              [message]=\"response.message\"\n              *ngIf=\"!hideAlert\"\n            ></lib-alert>\n            <lib-input\n              [title]=\"'Full Name'\"\n              [type]=\"'text'\"\n              [formData]=\"formData\"\n              [name]=\"'name'\"\n              [invalidText]=\"'Your name is required'\"\n            ></lib-input>\n            <div class=\"form-group\">\n              <label for=\"state\">State of residence</label>\n              <select\n                class=\"form-control custom-select\"\n                [formControl]=\"formData.get('state')\"\n                [value]=\"formData.get('state').value\"\n              >\n                <option value=\"\">-- Choose one --</option>\n                <option value=\"0\">Abia</option>\n                <option value=\"1\">Adamawa</option>\n                <option value=\"2\">Akwa Ibom</option>\n                <option value=\"3\">Anambra</option>\n                <option value=\"4\">Bauchi</option>\n                <option value=\"5\">Bayelsa</option>\n                <option value=\"6\">Benue</option>\n                <option value=\"7\">Borno</option>\n                <option value=\"8\">Cross River</option>\n                <option value=\"9\">Delta</option>\n                <option value=\"10\">Ebonyi</option>\n                <option value=\"11\">Edo</option>\n                <option value=\"12\">Ekiti</option>\n                <option value=\"13\">Enugu</option>\n                <option value=\"14\">FCT</option>\n                <option value=\"15\">Gombe</option>\n                <option value=\"16\">Imo</option>\n                <option value=\"17\">Jigawa</option>\n                <option value=\"18\">Kaduna</option>\n                <option value=\"19\">Kano</option>\n                <option value=\"20\">Katsina</option>\n                <option value=\"21\">Kebbi</option>\n                <option value=\"22\">Kogi</option>\n                <option value=\"23\">Kwara</option>\n                <option value=\"24\">Lagos</option>\n                <option value=\"25\">Nasarawa</option>\n                <option value=\"26\">Niger</option>\n                <option value=\"27\">Ogun</option>\n                <option value=\"28\">Ondo</option>\n                <option value=\"29\">Osun</option>\n                <option value=\"30\">Oyo</option>\n                <option value=\"31\">Plateau</option>\n                <option value=\"32\">Rivers</option>\n                <option value=\"33\">Sokoto</option>\n                <option value=\"34\">Taraba</option>\n                <option value=\"35\">Yobe</option>\n                <option value=\"36\">Zamfara</option>\n              </select>\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('state').invalid &&\n                  (formData.get('state').dirty || formData.get('state').touched)\n                \"\n                >Your state is required.</span\n              >\n            </div>\n            <lib-input\n              [title]=\"'Email Address'\"\n              [type]=\"'email'\"\n              [formData]=\"formData\"\n              [name]=\"'email'\"\n              [invalidText]=\"'Enter a valid email address'\"\n            ></lib-input>\n            <div class=\"form-group\">\n              <label for=\"sex\" class=\"d-block\">Sex</label>\n              <div class=\"custom-control custom-radio d-inline-block mr-5\">\n                <input\n                  id=\"sexMale\"\n                  [formControl]=\"formData.get('sex')\"\n                  value=\"Male\"\n                  type=\"radio\"\n                  class=\"custom-control-input\"\n                />\n                <label\n                  class=\"custom-control-label font-weight-normal\"\n                  for=\"sexMale\"\n                  >Male</label\n                >\n              </div>\n              <div class=\"custom-control custom-radio d-inline-block\">\n                <input\n                  id=\"sexFemale\"\n                  [formControl]=\"formData.get('sex')\"\n                  value=\"Female\"\n                  type=\"radio\"\n                  class=\"custom-control-input\"\n                />\n                <label\n                  class=\"custom-control-label font-weight-normal\"\n                  for=\"sexFemale\"\n                  >Female</label\n                >\n              </div>\n            </div>\n            <lib-input\n              [title]=\"'Phone number'\"\n              [type]=\"'tel'\"\n              [formData]=\"formData\"\n              [name]=\"'phone'\"\n              [invalidText]=\"'Phone number is required'\"\n            ></lib-input>\n            <lib-input\n              [title]=\"'Choose a password'\"\n              [type]=\"'password'\"\n              [formData]=\"formData\"\n              [name]=\"'password'\"\n              [invalidText]=\"'Choose a password'\"\n            ></lib-input>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Register with APSON'\"\n                [isBusy]=\"isBusy\"\n                [disabled]=\"formData.invalid\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Already a member?\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Login</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");




let RegisterComponent = class RegisterComponent extends shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(authService, formBuilder, requestService) {
        super();
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.formData = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['Male'],
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onRegisterMember() {
        this.toggleLoaders(true);
        this.subscription.add(this.requestService.registerMember(this.formData.value).subscribe(response => {
            const { data } = response;
            this.authService.setMember(data);
            this.toggleLoaders(false);
            this.showMessage('Registration successful', '', 'success');
            this.authService.gotoMembers();
        }, error => {
            this.handleError(error);
        }));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegsiterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegsiterModule", function() { return RegsiterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");






let RegsiterModule = class RegsiterModule {
};
RegsiterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                },
            ]),
        ],
    })
], RegsiterModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map