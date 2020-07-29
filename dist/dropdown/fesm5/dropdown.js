import { __extends } from 'tslib';
import { HostListener } from '@angular/core';
import { BaseComponent } from 'shared';

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
        onClick: [{ type: HostListener, args: ['document:click',] }]
    };
    return Dropdown;
}(BaseComponent));

export { Dropdown };
//# sourceMappingURL=dropdown.js.map
