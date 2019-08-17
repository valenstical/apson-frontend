import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
    super();
  }

  ngOnInit() {
    this.commonService.setPageTitle('Dashboard');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
