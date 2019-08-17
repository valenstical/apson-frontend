import { BaseComponent } from 'shared';
export declare class Dropdown extends BaseComponent {
    dropdownShown: boolean;
    constructor();
    onClick(): void;
    toggleDropdownMenu(event: any): void;
    setDropdownState(state: boolean): void;
}
