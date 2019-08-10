import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent, SchoolService, RequestService } from 'shared';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
})
export class AddSchoolComponent extends BaseComponent
  implements OnInit, OnDestroy {
  id: string;
  constructor(
    private route: ActivatedRoute,
    public schoolService: SchoolService,
    private requestService: RequestService,
  ) {
    super();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isBusy = true;
      this.subscription.add(
        this.requestService.get(`schools/${this.id}`, null).subscribe(
          response => {
            this.isBusy = false;
            this.schoolService.setValue(response.data);
          },
          error => {
            this.isBusy = false;
            this.show404 = true;
          },
        ),
      );
    }
  }

  ngOnDestroy(): void {
    this.schoolService.setValue(null);
    super.ngOnDestroy();
  }
}
