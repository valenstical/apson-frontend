import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent, School, RequestService, AuthService } from 'shared';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
})
export class SchoolsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  mySchools: School[] = [];
  constructor(
    private requestService: RequestService,
    private authService: AuthService,
  ) {
    super();
  }

  ngOnInit() {
    this.isBusy = true;
    this.mySchools = [];
    const member = this.authService.getMember();
    this.subscription.add(
      this.requestService
        .get(`schools/`, { memberId: member.id, size: 1000 })
        .subscribe(
          response => {
            this.isBusy = false;
            this.mySchools = response.data.result;
          },
          error => {
            this.isBusy = false;
          },
        ),
    );
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
