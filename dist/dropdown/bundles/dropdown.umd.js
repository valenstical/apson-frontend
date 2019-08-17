(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('shared')) :
    typeof define === 'function' && define.amd ? define('dropdown', ['exports', '@angular/core', 'shared'], factory) :
    (global = global || self, factory(global.dropdown = {}, global.ng.core, global.shared));
}(this, function (exports, core, shared) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Dropdown = /** @class */ (function (_super) {
        __extends(Dropdown, _super);
        function Dropdown() {
            var _this = _super.call(this) || this;
            _this.dropdownShown = false;
            return _this;
        }
        /**
         * @return {?}
         */
        Dropdown.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this.setDropdownState(false);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        Dropdown.prototype.toggleDropdownMenu = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            this.dropdownShown = !this.dropdownShown;
        };
        /**
         * @param {?} state
         * @return {?}
         */
        Dropdown.prototype.setDropdownState = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.dropdownShown = state;
        };
        Dropdown.propDecorators = {
            onClick: [{ type: core.HostListener, args: ['document:click',] }]
        };
        return Dropdown;
    }(shared.BaseComponent));

    exports.Dropdown = Dropdown;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dropdown.umd.js.map
