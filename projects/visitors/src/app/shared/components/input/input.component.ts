import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() name: string;
  @Input() title?: string;
  @Input() type = 'text';
  @Input() formData: FormGroup;
  @Input() invalidText?: string;
}
