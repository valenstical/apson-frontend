import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'shared';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
})
export class ScoresComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
    super();
  }

  ngOnInit() {
    this.commonService.setPageTitle('Score sheet');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
