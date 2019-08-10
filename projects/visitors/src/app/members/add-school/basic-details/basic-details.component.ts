import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService, SchoolService } from 'shared';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
})
export class BasicDetailsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  schoolId: string;
  formData: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    founded: [
      '',
      [Validators.required, Validators.min(1000), Validators.max(9999)],
    ],
    gender: ['0'],
  });
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private schoolService: SchoolService,
  ) {
    super();
  }

  editSchool() {
    this.subscription.add(
      this.requestService
        .patch(`schools/${this.schoolId}`, this.formData.value)
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

  createSchool() {
    this.subscription.add(
      this.requestService.post('schools', this.formData.value).subscribe(
        response => {
          const { data, message } = response;
          this.toggleLoaders(false);
          this.schoolService.setValue(data);
          this.schoolId = this.schoolService.getValue().id;
          this.showMessage(
            [
              'School successfully added to our platform. Scroll down to complete your school details!',
            ],
            '',
            'success',
          );
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }

  updateDetails() {
    this.toggleLoaders(true);
    this.schoolId ? this.editSchool() : this.createSchool();
  }

  ngOnInit(): void {
    const school = this.schoolService.getValue();
    if (school) {
      this.schoolId = school.id;
      const { name, type, founded, gender } = school;
      this.formData.setValue({
        name,
        type,
        founded,
        gender: gender.toString(),
      });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
