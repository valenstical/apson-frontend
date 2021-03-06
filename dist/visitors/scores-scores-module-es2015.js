(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scores-scores-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/scores/scores.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/scores/scores.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Scores\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/members/scores/scores.component.ts":
/*!****************************************************!*\
  !*** ./src/app/members/scores/scores.component.ts ***!
  \****************************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");




let ScoresComponent = class ScoresComponent extends shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(commonService) {
        super();
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.setPageTitle('Score sheet');
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
ScoresComponent.ctorParameters = () => [
    { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scores',
        template: __webpack_require__(/*! raw-loader!./scores.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/scores/scores.component.html"),
    })
], ScoresComponent);



/***/ }),

/***/ "./src/app/members/scores/scores.module.ts":
/*!*************************************************!*\
  !*** ./src/app/members/scores/scores.module.ts ***!
  \*************************************************/
/*! exports provided: ScoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresModule", function() { return ScoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scores.component */ "./src/app/members/scores/scores.component.ts");




let ScoresModule = class ScoresModule {
};
ScoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_scores_component__WEBPACK_IMPORTED_MODULE_3__["ScoresComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _scores_component__WEBPACK_IMPORTED_MODULE_3__["ScoresComponent"],
                },
            ]),
        ],
    })
], ScoresModule);



/***/ })

}]);
//# sourceMappingURL=scores-scores-module-es2015.js.map