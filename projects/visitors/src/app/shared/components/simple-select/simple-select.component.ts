import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
})
export class SimpleSelectComponent {
  @Input() data = [];
  @Input() placeholder = 'Choose one';
  @Input() defaultValue = '';
  @Output() select?: EventEmitter<any> = new EventEmitter<any>();

  notifyChange(value: any) {
    this.select.emit(value);
  }
}
