import { HostListener } from '@angular/core';
import { BaseComponent } from 'shared';

export class Dropdown extends BaseComponent {
  dropdownShown = false;

  constructor() {
    super();
  }

  @HostListener('document:click')
  onClick(): void {
    this.setDropdownState(false);
  }

  toggleDropdownMenu(event): void {
    event.stopPropagation();
    this.dropdownShown = !this.dropdownShown;
  }

  setDropdownState(state: boolean): void {
    this.dropdownShown = state;
  }
}
