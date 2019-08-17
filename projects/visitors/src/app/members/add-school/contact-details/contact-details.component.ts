import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'shared';
import { AddSchoolTemplate } from '../add-school-template';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent extends AddSchoolTemplate
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
    this.schoolId = this.school.id;
    if (this.school.contact) {
      const {
        contact: { email, phone, website },
      } = this.school;
      this.formData.setValue({ email, phone, website: website || '' });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
