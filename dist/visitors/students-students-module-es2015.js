(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/students/students.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/students/students.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Students\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/members/students/students.component.ts":
/*!********************************************************!*\
  !*** ./src/app/members/students/students.component.ts ***!
  \********************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");




let StudentsComponent = class StudentsComponent extends shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(commonService) {
        super();
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.setPageTitle('Students');
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
StudentsComponent.ctorParameters = () => [
    { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students',
        template: __webpack_require__(/*! raw-loader!./students.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/students/students.component.html"),
    })
], StudentsComponent);



/***/ }),

/***/ "./src/app/members/students/students.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/students/students.module.ts ***!
  \*****************************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students.component */ "./src/app/members/students/students.component.ts");




let StudentsModule = class StudentsModule {
};
StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"],
                },
            ]),
        ],
    })
], StudentsModule);



/***/ })

}]);
//# sourceMappingURL=students-students-module-es2015.js.map