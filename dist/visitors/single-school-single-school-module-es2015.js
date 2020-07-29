(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-school-single-school-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/single-school/single-school.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/single-school/single-school.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-vh-100\">\n  <ng-container *ngIf=\"loading; else schoolTemplate\">\n    <lib-busy></lib-busy>\n  </ng-container>\n  <ng-template #schoolTemplate>\n    <section\n      class=\"hero-single-school\"\n      [style.backgroundImage]=\"getCover()\"\n    ></section>\n    <section class=\"section school-section\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-5\">\n            <div class=\"school-cta shadow sticky-top mb-5\">\n              <img [attr.src]=\"school.logo\" width=\"20\" class=\"school-badge\" />\n              <h1 class=\"mb-4 school-subtitle text-center\">\n                {{ school.name }}\n              </h1>\n              <ul class=\"fa-ul school-list\">\n                <li *ngIf=\"school.location\">\n                  <i class=\"fas fa-map-marker-alt fa-li blog-link-more\"></i>\n                  <a [href]=\"toMapAddress()\" target=\"_blank\">{{\n                    school.fullAddress\n                  }}</a>\n                </li>\n                <li *ngIf=\"school.email\">\n                  <i\n                    class=\"fas fa-li fa-flip-horizontal fa-envelope blog-link-more\"\n                  ></i>\n                  <a [href]=\"toEmailAddress()\" class=\"text-overflow\">{{\n                    school.email\n                  }}</a>\n                </li>\n                <li *ngIf=\"school.website\">\n                  <i\n                    class=\"fas fa-li fa-flip-horizontal fa-link blog-link-more\"\n                  ></i>\n                  <a\n                    [href]=\"school.website\"\n                    target=\"_blank\"\n                    class=\"text-overflow\"\n                    >{{ school.website }}</a\n                  >\n                </li>\n                <li *ngIf=\"school.phone\">\n                  <i\n                    class=\"fas fa-li fa-phone fa-flip-horizontal blog-link-more text-phone \"\n                  ></i>\n                  <a [href]=\"toPhone()\">{{ school.phone }}</a>\n                </li>\n              </ul>\n              <a\n                (click)=\"scrollToContact(contact)\"\n                class=\"btn-brand mt-4 w-100 pointer text-uppercase scroll\"\n                >Contact us</a\n              >\n            </div>\n          </div>\n          <div class=\"col-md-7 col-lg-8\">\n            <h4 class=\"mb-4 school-subtitle mt-4\">About Us</h4>\n            <ul class=\"list-inline text-sm mb-4 mt-4 school-summary\">\n              <li class=\"list-inline-item mr-3\">\n                <i class=\"fas blog-link-more fa-user-graduate\"></i>\n                {{ school.typeName }}\n              </li>\n              <li class=\"list-inline-item mr-3\">\n                <i class=\"fas fa-calendar-alt blog-link-more\"></i> Founded\n                {{ school.founded }}\n              </li>\n              <li class=\"list-inline-item mr-3\">\n                <i class=\"fas fa-users blog-link-more\"></i> Accepts\n                {{ getGender() }}\n              </li>\n            </ul>\n            <div class=\"school-details\">\n              <div\n                class=\"text-block text-muted font-weight-light text-sentence\"\n                [innerHTML]=\"school.details\"\n              ></div>\n            </div>\n            <div class=\"text-block\" *ngIf=\"school.amenities\">\n              <hr class=\"mt-5 mb-4\" />\n              <h2 class=\"school-subtitle mb-4\">Amenities</h2>\n              <ul class=\"list-unstyled text-muted school-summary mb-0\">\n                <li class=\"mb-2\" *ngIf=\"school.amenities.laboratory\">\n                  <i class=\"fas mr-1 fa-bong blog-link-more\"></i>\n                  <span class=\"text-sm\">Science Laboratory</span>\n                </li>\n                <li class=\"mb-2\" *ngIf=\"school.amenities.computer\">\n                  <i class=\"fas mr-1 fa-desktop blog-link-more\"></i>\n                  <span class=\"text-sm\">Computer Laboratory</span>\n                </li>\n                <li class=\"mb-2\" *ngIf=\"school.amenities.library\">\n                  <i class=\"fas mr-1 fa-book blog-link-more\"></i>\n                  <span class=\"text-sm\">Library</span>\n                </li>\n                <li class=\"mb-3\" *ngIf=\"school.amenities.vehicle\">\n                  <i class=\"fas mr-1 fa-bus-alt blog-link-more\"></i>\n                  <span class=\"text-sm\">School Vehicle</span>\n                </li>\n                <li class=\"mb-2\" *ngIf=\"school.amenities.boarding\">\n                  <i class=\"fas mr-1 blog-link-more fa-house-damage\"></i>\n                  <span class=\"text-sm\">Boarding Facility</span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"text-block\" *ngIf=\"school.gallery\">\n              <hr class=\"mb-4 mt-5\" />\n              <h2 class=\"mb-4 school-subtitle\">Gallery</h2>\n              <div class=\"card-columns\">\n                <div class=\"card\" *ngFor=\"let image of school.gallery\">\n                  <img\n                    class=\"card-img-top\"\n                    [attr.src]=\"image\"\n                    alt=\"{{\n                      school.name.concat(', ').concat(school.fullAddress)\n                    }}\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"contact-form form mb-5 \" id=\"contact\" #contact>\n              <hr class=\"mt-5 mb-5\" />\n              <h2 class=\"school-subtitle mb-1 \">Contact Us</h2>\n              <p class=\"mb-5 support-text\">\n                Feel free to contact us for more information concerning our\n                school, admission procedures and requirements.\n              </p>\n              <app-contact-box\n                [receiver]=\"\n                  school.contact ? school.contact.email : defaultEmail\n                \"\n                [scrollView]=\"contact\"\n                [subjects]=\"['Enquiry for Admission', 'General Enquiry']\"\n              ></app-contact-box>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/single-school/single-school.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/single-school/single-school.component.ts ***!
  \**********************************************************/
/*! exports provided: SingleSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSchoolComponent", function() { return SingleSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");





let SingleSchoolComponent = class SingleSchoolComponent extends shared__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(activedRoute, requestService, router) {
        super();
        this.activedRoute = activedRoute;
        this.requestService = requestService;
        this.router = router;
        this.defaultEmail = helpers__WEBPACK_IMPORTED_MODULE_3__["APSON_EMAIL"];
    }
    ngOnInit() {
        this.loading = true;
        const { snapshot: { params: { id }, }, } = this.activedRoute;
        this.subscription.add(this.requestService.getSchool(id).subscribe(({ data }) => {
            this.school = data;
            this.setFullAddress();
            this.setContactDetails();
            this.loading = false;
        }, _ => {
            this.router.navigateByUrl('/not-found');
        }));
    }
    toMapAddress() {
        return `https://maps.google.com?q=${this.school.fullAddress}`;
    }
    toPhone() {
        return `tel:${this.school.phone}`;
    }
    setFullAddress() {
        if (this.school.location) {
            const { location: { address, city, stateName }, } = this.school;
            this.school.fullAddress = `${address}, ${city}, ${stateName}`;
        }
    }
    setContactDetails() {
        if (this.school.contact) {
            const { contact: { email, phone, website }, } = this.school;
            this.school.email = email;
            this.school.phone = Object(helpers__WEBPACK_IMPORTED_MODULE_3__["toMobileNumber"])(phone);
            this.school.website = website;
        }
    }
    toEmailAddress() {
        return `mailto:${this.school.email}`;
    }
    getCover() {
        return `url(${this.school.cover})`;
    }
    getGender() {
        return Object(helpers__WEBPACK_IMPORTED_MODULE_3__["getGender"])(this.school.gender);
    }
    scrollToContact(element) {
        Object(helpers__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(element);
    }
};
SingleSchoolComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SingleSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-school',
        template: __webpack_require__(/*! raw-loader!./single-school.component.html */ "../../node_modules/raw-loader/index.js!./src/app/single-school/single-school.component.html"),
    })
], SingleSchoolComponent);



/***/ }),

/***/ "./src/app/single-school/single-school.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/single-school/single-school.module.ts ***!
  \*******************************************************/
/*! exports provided: SingleSchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSchoolModule", function() { return SingleSchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _single_school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-school.component */ "./src/app/single-school/single-school.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var _contact_box_contact_box_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact-box/contact-box.module */ "./src/app/contact-box/contact-box.module.ts");







let SingleSchoolModule = class SingleSchoolModule {
};
SingleSchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_single_school_component__WEBPACK_IMPORTED_MODULE_3__["SingleSchoolComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _contact_box_contact_box_module__WEBPACK_IMPORTED_MODULE_6__["ContactBoxModule"],
            shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _single_school_component__WEBPACK_IMPORTED_MODULE_3__["SingleSchoolComponent"],
                },
            ]),
        ],
    })
], SingleSchoolModule);



/***/ })

}]);
//# sourceMappingURL=single-school-single-school-module-es2015.js.map