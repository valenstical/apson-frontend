import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService, SchoolService } from 'shared';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
})
export class FullDetailsComponent extends BaseComponent
  implements OnDestroy, OnInit {
  schoolId: string;
  formData: FormGroup = this.formBuilder.group({
    details: ['', Validators.required],
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
    const school = this.schoolService.getValue();
    this.schoolId = school.id;
    if (school.details) {
      this.formData.setValue({ details: school.details });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
