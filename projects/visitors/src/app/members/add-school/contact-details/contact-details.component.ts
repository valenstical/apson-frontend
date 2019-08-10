import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService, SchoolService } from 'shared';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent extends BaseComponent
  implements OnDestroy, OnInit {
  schoolId: string;
  formData: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    website: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private schoolService: SchoolService,
  ) {
    super();
  }

  updateDetails() {
    this.toggleLoaders(true);
    const { email, phone, website } = this.formData.value;
    const params = website.trim()
      ? { email, phone, website }
      : { email, phone };
    this.subscription.add(
      this.requestService
        .patch(`schools/${this.schoolId}/contact`, params)
        .subscribe(
          response => {
            this.toggleLoaders(false);
            this.showMessage([response.message], '', 'success');
          },
          error => {
            this.handleError(error);
          },
        ),
    );
  }
  ngOnInit(): void {
    const school = this.schoolService.getValue();
    this.schoolId = school.id;
    if (school.contact) {
      const {
        contact: { email, phone, website },
      } = school;
      this.formData.setValue({ email, phone, website: website || '' });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
