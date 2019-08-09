import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scrollIntoView, getGender, APSON_EMAIL } from 'helpers';
import { BaseComponent, School, RequestService } from 'shared';

@Component({
  selector: 'app-single-school',
  templateUrl: './single-school.component.html',
})
export class SingleSchoolComponent extends BaseComponent implements OnInit {
  school: School;
  defaultEmail = APSON_EMAIL;

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
      this.requestService.getSchool(id).subscribe(
        ({ data }) => {
          this.school = data;
          this.setFullAddress();
          this.setContactDetails();
          this.loading = false;
        },
        _ => {
          this.router.navigateByUrl('/not-found');
        },
      ),
    );
  }

  toMapAddress(): string {
    return `https://maps.google.com?q=${this.school.fullAddress}`;
  }

  toPhone(): string {
    return `tel:${this.school.phone}`;
  }

  setFullAddress(): void {
    if (this.school.location) {
      const {
        location: { address, city, stateName },
      } = this.school;
      this.school.fullAddress = `${address}, ${city}, ${stateName}`;
    }
  }

  setContactDetails(): void {
    if (this.school.contact) {
      const {
        contact: { email, phone, website },
      } = this.school;
      this.school.email = email;
      this.school.phone = ['0', '+', '234'].includes(phone.charAt(0))
        ? phone
        : `0${phone}`;
      this.school.website = website;
    }
  }

  toEmailAddress(): string {
    return `mailto:${this.school.email}`;
  }

  getCover(): string {
    return `url(${this.school.cover})`;
  }

  getGender(): string {
    return getGender(this.school.gender);
  }

  scrollToContact(element: HTMLElement) {
    scrollIntoView(element);
  }
}
