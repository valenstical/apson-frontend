import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
})
export class SubmitButtonComponent implements OnInit {
  @Input() isBusy = false;
  @Input() text?: string;
  @Input() disabled = false;
  @Input() type = 'submit';
  @Input() maxWidth = 'w-100';
  @Output() btnClick?: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onClick(event: any) {
    if (this.type === 'button') {
      this.btnClick.emit(event);
    }
  }
}
