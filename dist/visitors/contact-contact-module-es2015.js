(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section bg-contact overlay contact-section\">\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-center\">Contact us</h1>\n  </div>\n</section>\n<section class=\"section contact-section\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-2 d-md-block d-none\">\n        <h3 class=\"contact-section-subtitle\">Contact Details:</h3>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <h2 class=\"text-uppercase\">APSON Headquarters</h2>\n        <p>\n          No. 2 Etete road, Off Adesuwa Grammer School road, Benin City, Edo\n          state, Nigeria\n        </p>\n      </div>\n      <div class=\"col-md-3 col-sm-12\">\n        <h2 class=\"text-uppercase\">Email</h2>\n        <p>\n          <a [href]=\"'mailto:support@apsonigeria.org'\"\n            >support@apsonigeria.org</a\n          >\n        </p>\n      </div>\n      <div class=\"col-md-3 col-sm-12\" #scrollView>\n        <h2 class=\"text-uppercase\">Phone</h2>\n        <p><a [href]=\"'tel:+2348094561245'\">+234 (0)809 456 1245</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-2\">\n        <h3 class=\"contact-section-subtitle subtitle\">Write Us:</h3>\n      </div>\n      <div class=\"col-sm-12 col-md-10\">\n        <app-contact-box [scrollView]=\"scrollView\"></app-contact-box>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "../../node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_box_contact_box_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact-box/contact-box.module */ "./src/app/contact-box/contact-box.module.ts");







let ContactModule = class ContactModule {
};
ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _contact_box_contact_box_module__WEBPACK_IMPORTED_MODULE_6__["ContactBoxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                },
            ]),
        ],
    })
], ContactModule);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map