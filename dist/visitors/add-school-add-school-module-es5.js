(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-school-add-school-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/add-school/add-school.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/add-school/add-school.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basic-details></app-basic-details>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/add-school/basic-details/basic-details.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/add-school/basic-details/basic-details.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-border\">\n  <div class=\"col-12 col-lg-3\" *ngIf=\"school\">\n    <div class=\"form-section-heading\">\n      <h4>1. Basic Information</h4>\n      <p>Add basic information about your school here</p>\n    </div>\n  </div>\n  <div\n    class=\"col-12 col-lg-9\"\n    [class.offset-lg-1]=\"!school\"\n    [class.col-lg-10]=\"!school\"\n  >\n    <div class=\"form-section-heading\" *ngIf=\"!school\">\n      <h4>Add a new school</h4>\n      <p>\n        Add basic information about your school here, you will add more\n        information later.\n      </p>\n    </div>\n    <form\n      (submit)=\"updateDetails()\"\n      [formGroup]=\"formData\"\n      class=\"form pl-4 position-relative pr-4 pt-5  form-box pb-4\"\n    >\n      <lib-input\n        [title]=\"'School Name'\"\n        [type]=\"'text'\"\n        [formData]=\"formData\"\n        [name]=\"'name'\"\n        [invalidText]=\"'School name is required'\"\n      ></lib-input>\n      <lib-select\n        [title]=\"'Type of school'\"\n        [data]=\"['Creche/Nursery', 'Primary', 'Secondary']\"\n        [formData]=\"formData\"\n        [name]=\"'type'\"\n        [invalidText]=\"'School type is required'\"\n      ></lib-select>\n      <lib-input\n        [title]=\"'Year Founded'\"\n        [type]=\"'number'\"\n        [formData]=\"formData\"\n        [name]=\"'founded'\"\n        [invalidText]=\"'Enter a valid year (e.g 2012)'\"\n      ></lib-input>\n      <div class=\"form-group\">\n        <label for=\"gender\" class=\"d-block\">Accepted Gender</label>\n        <div class=\"custom-control custom-radio d-inline-block mr-5 mb-2\">\n          <input\n            id=\"genderMixed\"\n            [formControl]=\"formData.get('gender')\"\n            value=\"0\"\n            type=\"radio\"\n            class=\"custom-control-input\"\n          />\n          <label\n            class=\"custom-control-label font-weight-normal\"\n            for=\"genderMixed\"\n            >Mixed</label\n          >\n        </div>\n        <div class=\"custom-control custom-radio d-inline-block mr-5 mb-2\">\n          <input\n            id=\"genderMale\"\n            [formControl]=\"formData.get('gender')\"\n            value=\"1\"\n            type=\"radio\"\n            class=\"custom-control-input\"\n          />\n          <label\n            class=\"custom-control-label font-weight-normal\"\n            for=\"genderMale\"\n            >Male Only</label\n          >\n        </div>\n        <div class=\"custom-control custom-radio d-inline-block mb-2\">\n          <input\n            id=\"genderFemale\"\n            [formControl]=\"formData.get('gender')\"\n            value=\"2\"\n            type=\"radio\"\n            class=\"custom-control-input\"\n          />\n          <label\n            class=\"custom-control-label font-weight-normal\"\n            for=\"genderFemale\"\n            >Female Only</label\n          >\n        </div>\n      </div>\n      <lib-alert\n        *ngIf=\"!hideAlert\"\n        [message]=\"response.message\"\n        [type]=\"response.type\"\n        [title]=\"response.title\"\n      ></lib-alert>\n      <div class=\"text-right text-sm btn-grouped ml-n4 mr-n4 pr-4 pl-4\">\n        <lib-submit-button\n          [text]=\"'Save changes'\"\n          [maxWidth]=\"''\"\n          [isBusy]=\"isBusy\"\n          [disabled]=\"formData.invalid\"\n        ></lib-submit-button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/add-school/add-school.component.ts":
/*!************************************************************!*\
  !*** ./src/app/members/add-school/add-school.component.ts ***!
  \************************************************************/
/*! exports provided: AddSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSchoolComponent", function() { return AddSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");




var AddSchoolComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddSchoolComponent, _super);
    function AddSchoolComponent(commonService) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        return _this;
    }
    AddSchoolComponent.prototype.ngOnInit = function () {
        this.commonService.fullWidth = true;
    };
    AddSchoolComponent.prototype.ngOnDestroy = function () {
        this.commonService.fullWidth = false;
        _super.prototype.ngOnDestroy.call(this);
    };
    AddSchoolComponent.ctorParameters = function () { return [
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    AddSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-school',
            template: __webpack_require__(/*! raw-loader!./add-school.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/add-school/add-school.component.html"),
        })
    ], AddSchoolComponent);
    return AddSchoolComponent;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/members/add-school/add-school.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/members/add-school/add-school.module.ts ***!
  \*********************************************************/
/*! exports provided: AddSchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSchoolModule", function() { return AddSchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _add_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-school.component */ "./src/app/members/add-school/add-school.component.ts");
/* harmony import */ var _basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-details/basic-details.component */ "./src/app/members/add-school/basic-details/basic-details.component.ts");
/* harmony import */ var _message_box_message_box_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message-box/message-box.module */ "./src/app/members/message-box/message-box.module.ts");








var AddSchoolModule = /** @class */ (function () {
    function AddSchoolModule() {
    }
    AddSchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_school_component__WEBPACK_IMPORTED_MODULE_5__["AddSchoolComponent"], _basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_6__["BasicDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _message_box_message_box_module__WEBPACK_IMPORTED_MODULE_7__["MessageBoxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _add_school_component__WEBPACK_IMPORTED_MODULE_5__["AddSchoolComponent"],
                    },
                ]),
            ],
        })
    ], AddSchoolModule);
    return AddSchoolModule;
}());



/***/ }),

/***/ "./src/app/members/add-school/basic-details/basic-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/members/add-school/basic-details/basic-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDetailsComponent", function() { return BasicDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common-service.service */ "./src/app/members/services/common-service.service.ts");





var BasicDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BasicDetailsComponent, _super);
    function BasicDetailsComponent(formBuilder, requestService, commonService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.requestService = requestService;
        _this.commonService = commonService;
        _this.formData = _this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            founded: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999)],
            ],
            gender: ['0'],
        });
        return _this;
    }
    BasicDetailsComponent.prototype.editSchool = function () {
        var _this = this;
        this.subscription.add(this.requestService
            .patch("schools/" + this.school.id, this.formData.value)
            .subscribe(function (response) {
            _this.toggleLoaders(false);
            _this.showMessage([response.message], '', 'success');
        }, function (error) {
            _this.handleError(error);
        }));
    };
    BasicDetailsComponent.prototype.createSchool = function () {
        var _this = this;
        this.subscription.add(this.requestService.post('schools', this.formData.value).subscribe(function (response) {
            var data = response.data;
            _this.toggleLoaders(false);
            _this.commonService.saveActiveSchool(data.id);
        }, function (error) {
            _this.handleError(error);
        }));
    };
    BasicDetailsComponent.prototype.updateDetails = function () {
        this.toggleLoaders(true);
        this.school ? this.editSchool() : this.createSchool();
    };
    BasicDetailsComponent.prototype.ngOnInit = function () {
        if (this.school) {
            var _a = this.school, name_1 = _a.name, type = _a.type, founded = _a.founded, gender = _a.gender;
            this.formData.setValue({
                name: name_1,
                type: type,
                founded: founded,
                gender: gender.toString(),
            });
        }
    };
    BasicDetailsComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BasicDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BasicDetailsComponent.prototype, "school", void 0);
    BasicDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-details',
            template: __webpack_require__(/*! raw-loader!./basic-details.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/add-school/basic-details/basic-details.component.html"),
        })
    ], BasicDetailsComponent);
    return BasicDetailsComponent;
}(shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=add-school-add-school-module-es5.js.map