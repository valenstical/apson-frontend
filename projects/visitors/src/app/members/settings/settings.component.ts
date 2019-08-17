import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
    super();
  }

  ngOnInit() {
    this.commonService.setPageTitle('School Settings');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
