import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService, BaseComponent, School } from 'shared';
import { CommonService } from '../../services/common-service.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
})
export class BasicDetailsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() school: School;

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
    private commonService: CommonService,
  ) {
    super();
  }

  editSchool() {
    this.subscription.add(
      this.requestService
        .patch(`schools/${this.school.id}`, this.formData.value)
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
          const { data } = response;
          this.toggleLoaders(false);
          this.commonService.saveActiveSchool(data.id);
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }

  updateDetails() {
    this.toggleLoaders(true);
    this.school ? this.editSchool() : this.createSchool();
  }

  ngOnInit(): void {
    if (this.school) {
      const { name, type, founded, gender } = this.school;
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
