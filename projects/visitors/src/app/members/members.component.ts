import { Component } from '@angular/core';
import { BaseComponent } from 'shared';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
})
export class MembersComponent extends BaseComponent {
  constructor() {
    super();
  }
}
