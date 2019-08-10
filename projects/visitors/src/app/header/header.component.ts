import { Component } from '@angular/core';
import { BaseComponent } from 'shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  constructor() {
    super();
  }
}
