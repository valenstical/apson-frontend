import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService, SchoolService } from 'shared';
import { STATES } from 'helpers';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
})
export class LocationDetailsComponent extends BaseComponent
  implements OnDestroy, OnInit {
  schoolId: string;
  fetchingLga = false;
  listOfStates = STATES;
  lgas = [];
  formData: FormGroup = this.formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    lga: ['', Validators.required],
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
        .patch(`schools/${this.schoolId}/location`, this.formData.value)
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

  updateLGA(state: string, update = true) {
    this.fetchingLga = true;
    this.subscription.add(
      this.requestService.get(`lgas`, { state }).subscribe(
        response => {
          this.lgas = response.data;
          this.fetchingLga = false;
          if (update) {
            this.formData.controls.lga.setValue('');
          }
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
    if (school.location) {
      const {
        location: { address, city, state, lga },
      } = school;
      this.formData.setValue({ address, city, state, lga });
      this.updateLGA(state, false);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
