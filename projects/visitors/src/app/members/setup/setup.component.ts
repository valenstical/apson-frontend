import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent, RequestService, AuthService } from 'shared';
import { CommonService } from '../services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
})
export class SetupComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private commonService: CommonService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    const member = this.authService.getMember();
    this.subscription.add(
      this.requestService
        .get(`schools/`, { memberId: member.id, size: 1000, order: 'name,ASC' })
        .subscribe(
          response => {
            const { result } = response.data;
            this.commonService.setSchools(result || []);
            this.commonService.setActiveSchool(null);
            this.commonService.setReady(true);
          },
          error => {
            this.isBusy = false;
          },
        ),
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.router.navigateByUrl('/members/dashboard');
  }
}
