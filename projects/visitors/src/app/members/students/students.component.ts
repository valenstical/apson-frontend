import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
    super();
  }

  ngOnInit() {
    this.commonService.setPageTitle('Students');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
