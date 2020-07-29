import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
})
export class AddSchoolComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
    super();
  }

  ngOnInit() {
    this.commonService.fullWidth = true;
  }

  ngOnDestroy(): void {
    this.commonService.fullWidth = false;
    super.ngOnDestroy();
  }
}
