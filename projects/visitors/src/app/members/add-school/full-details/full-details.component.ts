import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService } from 'shared';
import { AddSchoolTemplate } from '../add-school-template';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
})
export class FullDetailsComponent extends AddSchoolTemplate
  implements OnDestroy, OnInit {
  schoolId: string;
  formData: FormGroup = this.formBuilder.group({
    details: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
  ) {
    super();
  }

  updateDetails() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.requestService
        .patch(`schools/${this.schoolId}/details`, this.formData.value)
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
    if (this.school.details) {
      this.formData.setValue({ details: this.school.details });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
