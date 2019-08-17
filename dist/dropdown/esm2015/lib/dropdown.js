/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener } from '@angular/core';
import { BaseComponent } from 'shared';
export class Dropdown extends BaseComponent {
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
if (false) {
    /** @type {?} */
    Dropdown.prototype.dropdownShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImxpYi9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXZDLE1BQU0sT0FBTyxRQUFTLFNBQVEsYUFBYTtJQUd6QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFJdEIsQ0FBQzs7OztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3RCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O3NCQVpBLFlBQVksU0FBQyxnQkFBZ0I7Ozs7SUFOOUIsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnc2hhcmVkJztcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGRyb3Bkb3duU2hvd24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRyb3Bkb3duU2hvd24gPSAhdGhpcy5kcm9wZG93blNob3duO1xuICB9XG5cbiAgc2V0RHJvcGRvd25TdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd25TaG93biA9IHN0YXRlO1xuICB9XG59XG4iXX0=