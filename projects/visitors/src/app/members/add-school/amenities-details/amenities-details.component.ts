import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseComponent, RequestService, SchoolService } from 'shared';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.component.html',
})
export class AmenitiesDetailsComponent extends BaseComponent
  implements OnDestroy, OnInit {
  schoolId: string;
  formData: FormGroup = this.formBuilder.group({
    computer: [false],
    library: [false],
    laboratory: [false],
    vehicle: [false],
    boarding: [false],
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
        .patch(`schools/${this.schoolId}/amenities`, this.formData.value)
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
    if (school.amenities) {
      this.formData.setValue(school.amenities);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
