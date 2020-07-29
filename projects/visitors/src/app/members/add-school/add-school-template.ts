import { Input, EventEmitter, Output } from '@angular/core';
import { School, BaseComponent } from 'shared';

export class AddSchoolTemplate extends BaseComponent {
  @Input() school: School;
  @Output() schoolChange: EventEmitter<School> = new EventEmitter<School>();

  constructor() {
    super();
  }
}
