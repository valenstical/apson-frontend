import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-not-found-box',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  @Input() icon = 'assets/images/icons/empty.svg';
  @Input() message?: string;
  @Input() title?: string;

  constructor(private router: Router) {}
}
