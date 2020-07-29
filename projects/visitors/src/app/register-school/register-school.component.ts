import { Component, OnDestroy } from '@angular/core';
import { STATES, LGAS } from 'helpers';
import { Subject } from 'rxjs';
import { BaseComponent, AuthService, RequestService } from 'shared';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
})
export class RegisterSchoolComponent extends BaseComponent
  implements OnDestroy {
  schoolParams = new Subject();
  states = STATES;
  lgas = [];

  formData: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
    lga: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private requestService: RequestService,
  ) {
    super();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onRegisterSchool() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.requestService.post('registration', this.formData.value).subscribe(
        (response) => {
          const { data } = response;
          this.authService.setMember(data);
          this.toggleLoaders(false);
          this.formData.reset();
          this.showMessage(
            'Your school has been registered with the Assocation of Private School Owners of Nigeria. \nYou will receive further information through SMS.',
            'Registration Successful',
            'success',
          );
        },
        (error) => {
          this.handleError(error);
        },
      ),
    );
  }

  filterByState(state: string): void {
    this.filter('state', state);
    this.lgas = state ? LGAS[state] : [];
  }

  filter(key: string, value: string) {
    this.schoolParams.next({ key, value });
  }
}
