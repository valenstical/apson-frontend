(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs-blogs-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/blogs/blogs.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section bg-contact overlay contact-section\">\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-center\">Publications</h1>\n  </div>\n</section>\n<section class=\"nav-section\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">All</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog/news/\" routerLinkActive=\"active\">News/Events</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog/publications/\" routerLinkActive=\"active\">Publications</a>\n      </li>\n    </ul>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"row blog-slider boxed-row\">\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100 \">\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <a routerLink=\"/blog/998345\" class=\"link-cover\"></a>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/zach-vessels-1284924-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/9987456\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/joshua-oluwagbemiga-1435064-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria.</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/annie-spratt-1215936-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a class=\"link-cover\" routerLink=\"/blog/994343\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/santi-vedri-707620-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/zach-vessels-1285339-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/benny-jackson-222664-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () { };
    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! raw-loader!./blogs.component.html */ "../../node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html"),
        })
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/blogs/blogs.module.ts":
/*!***************************************!*\
  !*** ./src/app/blogs/blogs.module.ts ***!
  \***************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_blogs_component__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _blogs_component__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"],
                    },
                ]),
            ],
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ })

}]);
//# sourceMappingURL=blogs-blogs-module-es5.js.map