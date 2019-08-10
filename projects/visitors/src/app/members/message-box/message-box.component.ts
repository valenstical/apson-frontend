import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
})
export class MessageBoxComponent implements OnInit {
  ACTION = {
    PAYMENT: 0,
    NOT_FOUND: 1,
    EMPTY_DATA: 2,
  };
  icons = [
    'assets/images/icons/deal.svg',
    'assets/images/icons/not-found.svg',
    'assets/images/icons/empty.svg',
  ];
  titles = ['Pay membership fee', 'PAGE NOT FOUND!', 'NO RESULT FOUND!'];
  buttonTexts = ['Pay membership fee', 'Go home', ''];
  highlights = [
    [
      'Your authenticated membership certificate, signed and approved will be sent to your email.',
      'Add your school to our online directory so it can be easily discovered by everyone.',
      'FREE access to our central school management system for your students.',
      '100% Support from the APSON family.',
    ],
    [],
    [],
  ];
  messages = [
    'Congratulations on taking the first step to becoming a member of our great association.',
    "We can't seem to find the page you're looking for.",
    "We couldn't find anything matching your search. Try searching other keywords.",
  ];

  @Input() isBusy = false;
  @Input() action: number;
  @Input() icon?: string;
  @Input() title?: string;
  @Input() buttonText?: string;
  @Input() highlight?: Array<string>;
  @Input() message?: string;
  @Input() path?: string;
  @Output() btnClick?: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.icon = this.icon || this.icons[this.action];
    this.title = this.title || this.titles[this.action];
    this.highlight = this.highlight || this.highlights[this.action];
    this.message = this.message || this.messages[this.action];
  }

  onClick(event: any): void {
    if (this.path) {
      this.router.navigate([`/${this.path}`]);
      return;
    }
    this.btnClick.emit(event);
  }
}
