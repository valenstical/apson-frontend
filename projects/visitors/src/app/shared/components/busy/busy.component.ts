import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
})
export class BusyComponent {
  @Input() text = 'Please wait...';
  constructor() {}
}
