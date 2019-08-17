import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RequestService } from 'shared';
import { AddSchoolTemplate } from '../add-school-template';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.component.html',
})
export class AmenitiesDetailsComponent extends AddSchoolTemplate
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
    this.schoolId = this.school.id;
    if (this.school.amenities) {
      this.formData.setValue(this.school.amenities);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
