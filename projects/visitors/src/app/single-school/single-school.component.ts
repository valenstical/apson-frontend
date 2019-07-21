import { Component, OnInit } from '@angular/core';
import { scrollIntoView } from '../helpers/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from '../shared/models/school';
import { BaseComponent } from '../shared/components/base-component';
import { RequestService } from '../shared/services/request.service';

@Component({
  selector: 'app-single-school',
  templateUrl: './single-school.component.html',
})
export class SingleSchoolComponent extends BaseComponent implements OnInit {
  school: School;
  constructor(
    private activedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.loading = true;
    const {
      snapshot: {
        params: { id },
      },
    } = this.activedRoute;
    this.subscription.add(
      this.requestService.get(`schools/${id}`).subscribe(
        school => {
          this.school = school;
          this.loading = false;
        },
        _ => {
          this.router.navigateByUrl('/not-found');
        },
      ),
    );
  }

  scrollToContact(element: HTMLElement) {
    scrollIntoView(element);
  }
}
