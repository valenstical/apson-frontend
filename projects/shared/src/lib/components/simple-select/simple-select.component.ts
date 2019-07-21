import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-simple-select',
  templateUrl: './simple-select.component.html',
})
export class SimpleSelectComponent {
  @Input() data = [];
  @Input() placeholder = 'Choose one';
  @Input() defaultValue = '';
  @Output() whenSelected?: EventEmitter<any> = new EventEmitter<any>();

  notifyChange(value: any) {
    this.whenSelected.emit(value);
  }
}
