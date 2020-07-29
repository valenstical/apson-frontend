import { Component } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from './services/common-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
})
export class MembersComponent extends BaseComponent {
  constructor(public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {}
}
