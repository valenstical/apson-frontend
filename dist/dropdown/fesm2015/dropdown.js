import { HostListener } from '@angular/core';
import { BaseComponent } from 'shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Dropdown extends BaseComponent {
    constructor() {
        super();
        this.dropdownShown = false;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.setDropdownState(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleDropdownMenu(event) {
        event.stopPropagation();
        this.dropdownShown = !this.dropdownShown;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDropdownState(state) {
        this.dropdownShown = state;
    }
}
Dropdown.propDecorators = {
    onClick: [{ type: HostListener, args: ['document:click',] }]
};

export { Dropdown };
//# sourceMappingURL=dropdown.js.map
