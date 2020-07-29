(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/profile/profile.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/profile/profile.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-xl-9\">\n    <form\n      [formGroup]=\"formData\"\n      (ngSubmit)=\"onUpdateMember()\"\n      class=\"form pl-4 position-relative pr-4 pt-5  form-box pb-4\"\n    >\n      <div class=\"form-group text-center mb-5\">\n        <div\n          class=\"image-wrapper\"\n          [class.uploading]=\"isUploading\"\n          #anchorElement\n        >\n          <img\n            src=\"{{ member.image }}\"\n            class=\"profile-image\"\n            [class.uploading]=\"isUploading\"\n            width=\"120\"\n            height=\"120\"\n          />\n          <div\n            class=\"spinner-border text-white\"\n            role=\"status\"\n            *ngIf=\"isUploading\"\n          >\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <br />\n        <button\n          *ngIf=\"!isUploading\"\n          type=\"button\"\n          class=\"btn btn-link text-sm\"\n          (click)=\"changeImage()\"\n        >\n          Change Image\n        </button>\n      </div>\n      <lib-alert\n        [title]=\"response.title\"\n        [type]=\"response.type\"\n        [message]=\"response.message\"\n        *ngIf=\"!hideAlert\"\n      ></lib-alert>\n      <lib-input\n        [title]=\"'Full Name'\"\n        [type]=\"'text'\"\n        [formData]=\"formData\"\n        [name]=\"'name'\"\n        [invalidText]=\"'Your name is required'\"\n      ></lib-input>\n      <div class=\"form-group\">\n        <label for=\"state\">State of residence</label>\n        <select\n          class=\"form-control custom-select\"\n          [formControl]=\"formData.get('state')\"\n          [value]=\"formData.get('state').value\"\n        >\n          <option value=\"\">-- Choose one --</option>\n          <option value=\"0\">Abia</option>\n          <option value=\"1\">Adamawa</option>\n          <option value=\"2\">Akwa Ibom</option>\n          <option value=\"3\">Anambra</option>\n          <option value=\"4\">Bauchi</option>\n          <option value=\"5\">Bayelsa</option>\n          <option value=\"6\">Benue</option>\n          <option value=\"7\">Borno</option>\n          <option value=\"8\">Cross River</option>\n          <option value=\"9\">Delta</option>\n          <option value=\"10\">Ebonyi</option>\n          <option value=\"11\">Edo</option>\n          <option value=\"12\">Ekiti</option>\n          <option value=\"13\">Enugu</option>\n          <option value=\"14\">FCT</option>\n          <option value=\"15\">Gombe</option>\n          <option value=\"16\">Imo</option>\n          <option value=\"17\">Jigawa</option>\n          <option value=\"18\">Kaduna</option>\n          <option value=\"19\">Kano</option>\n          <option value=\"20\">Katsina</option>\n          <option value=\"21\">Kebbi</option>\n          <option value=\"22\">Kogi</option>\n          <option value=\"23\">Kwara</option>\n          <option value=\"24\">Lagos</option>\n          <option value=\"25\">Nasarawa</option>\n          <option value=\"26\">Niger</option>\n          <option value=\"27\">Ogun</option>\n          <option value=\"28\">Ondo</option>\n          <option value=\"29\">Osun</option>\n          <option value=\"30\">Oyo</option>\n          <option value=\"31\">Plateau</option>\n          <option value=\"32\">Rivers</option>\n          <option value=\"33\">Sokoto</option>\n          <option value=\"34\">Taraba</option>\n          <option value=\"35\">Yobe</option>\n          <option value=\"36\">Zamfara</option>\n        </select>\n        <span\n          class=\"display-error\"\n          *ngIf=\"\n            formData.get('state').invalid &&\n            (formData.get('state').dirty || formData.get('state').touched)\n          \"\n          >Your state is required.</span\n        >\n      </div>\n      <lib-input\n        [title]=\"'Email Address'\"\n        [type]=\"'email'\"\n        [formData]=\"formData\"\n        [name]=\"'email'\"\n        [invalidText]=\"'Enter a valid email address'\"\n      ></lib-input>\n      <div class=\"form-group\">\n        <label for=\"sex\" class=\"d-block\">Sex</label>\n        <div class=\"custom-control custom-radio d-inline-block mr-5\">\n          <input\n            id=\"sexMale\"\n            formControlName=\"sex\"\n            value=\"Male\"\n            type=\"radio\"\n            class=\"custom-control-input\"\n          />\n          <label class=\"custom-control-label font-weight-normal\" for=\"sexMale\"\n            >Male</label\n          >\n        </div>\n        <div class=\"custom-control custom-radio d-inline-block\">\n          <input\n            id=\"sexFemale\"\n            formControlName=\"sex\"\n            value=\"Female\"\n            type=\"radio\"\n            class=\"custom-control-input\"\n          />\n          <label class=\"custom-control-label font-weight-normal\" for=\"sexFemale\"\n            >Female</label\n          >\n        </div>\n      </div>\n      <lib-input\n        [title]=\"'Phone Number'\"\n        [type]=\"'tel'\"\n        [formData]=\"formData\"\n        [name]=\"'phone'\"\n        [invalidText]=\"'Your phone number is required'\"\n      ></lib-input>\n      <div class=\"text-center mt-4 btn-curved w-100\">\n        <lib-submit-button\n          [text]=\"'Save changes'\"\n          [isBusy]=\"isBusy\"\n          [disabled]=\"formData.invalid && formData.dirty\"\n        ></lib-submit-button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/members/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm5/helpers.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");






var ProfileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileComponent, _super);
    function ProfileComponent(authService, formBuilder, requestService, scriptLoaderService, commonService) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.requestService = requestService;
        _this.scriptLoaderService = scriptLoaderService;
        _this.commonService = commonService;
        _this.isUploading = false;
        _this.formData = _this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['Male'],
        });
        return _this;
    }
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.commonService.setPageTitle('My profile');
        this.member = this.authService.getMember();
        var _a = this.member, name = _a.name, state = _a.state, email = _a.email, phone = _a.phone, sex = _a.sex;
        this.formData.setValue({ name: name, state: state, email: email, phone: phone, sex: sex });
    };
    ProfileComponent.prototype.onUpdateMember = function () {
        var _this = this;
        this.toggleLoaders(true);
        this.subscription.add(this.requestService.updateMember(this.formData.value).subscribe(function (_) {
            var member = _this.authService.getMember();
            _this.authService.setMember(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, member, _this.formData.value));
            _this.toggleLoaders(false);
            _this.showMessage('Your profile has been updated', '', 'success');
            Object(helpers__WEBPACK_IMPORTED_MODULE_4__["scrollIntoView"])(_this.anchorElement.nativeElement);
        }, function (error) {
            _this.handleError(error);
        }));
    };
    ProfileComponent.prototype.updateProfileImage = function (url) {
        var _this = this;
        this.requestService.updateProfileImage({ url: url }).subscribe(function (_) {
            _this.member.image = url;
            _this.authService.setMember(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.member));
            _this.isUploading = false;
        });
    };
    ProfileComponent.prototype.changeImage = function () {
        var _this = this;
        this.isUploading = true;
        if (!this.widget) {
            this.scriptLoaderService.load('cloudinary').then(function (data) {
                _this.widget = new helpers__WEBPACK_IMPORTED_MODULE_4__["CloudinaryWidget"](function (url) {
                    _this.updateProfileImage(url);
                }, function () {
                    _this.isUploading = false;
                });
                _this.widget.open();
            });
        }
        else {
            this.widget.open();
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('anchorElement', { static: false })
    ], ProfileComponent.prototype, "anchorElement", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/profile/profile.component.html"),
        })
    ], ProfileComponent);
    return ProfileComponent;
}(shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/members/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/members/profile/profile.component.ts");






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                    },
                ]),
            ],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map