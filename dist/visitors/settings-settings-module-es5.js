(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/settings/settings.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/settings/settings.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Settings\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/members/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/members/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");




var SettingsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingsComponent, _super);
    function SettingsComponent(commonService) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        return _this;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.commonService.setPageTitle('School Settings');
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/settings/settings.component.html"),
        })
    ], SettingsComponent);
    return SettingsComponent;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/members/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/members/settings/settings.component.ts");




var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
                    },
                ]),
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map