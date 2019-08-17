/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HostListener } from '@angular/core';
import { BaseComponent } from 'shared';
var Dropdown = /** @class */ (function (_super) {
    tslib_1.__extends(Dropdown, _super);
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
if (false) {
    /** @type {?} */
    Dropdown.prototype.dropdownShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImxpYi9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV2QztJQUE4QixvQ0FBYTtJQUd6QztRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUpELG1CQUFhLEdBQUcsS0FBSyxDQUFDOztJQUl0QixDQUFDOzs7O0lBR0QsMEJBQU87OztJQURQO1FBRUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQscUNBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQUs7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsbUNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7MEJBWkEsWUFBWSxTQUFDLGdCQUFnQjs7SUFhaEMsZUFBQztDQUFBLEFBcEJELENBQThCLGFBQWEsR0FvQjFDO1NBcEJZLFFBQVE7OztJQUNuQixpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdzaGFyZWQnO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgZHJvcGRvd25TaG93biA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duTWVudShldmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZHJvcGRvd25TaG93biA9ICF0aGlzLmRyb3Bkb3duU2hvd247XG4gIH1cblxuICBzZXREcm9wZG93blN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93blNob3duID0gc3RhdGU7XG4gIH1cbn1cbiJdfQ==