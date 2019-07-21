import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-busy',
  templateUrl: './busy.component.html',
})
export class BusyComponent {
  @Input() text = 'Please wait...';
  constructor() {}
}
