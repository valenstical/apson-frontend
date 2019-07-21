import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() name: string;
  @Input() title?: string;
  @Input() data = [];
  @Input() formData: FormGroup;
  @Input() invalidText?: string;
  @Input() disabled = false;
  @Input() isLoading = false;
  @Output() select?: EventEmitter<any> = new EventEmitter<any>();

  notifyChange(event: any) {
    this.select.emit(event);
  }
}
