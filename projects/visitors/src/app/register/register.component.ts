import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, AuthService, RequestService } from 'shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends BaseComponent implements OnDestroy {
  formData: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    sex: ['Male'],
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
  onRegisterMember() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.requestService.registerMember(this.formData.value).subscribe(
        response => {
          const { data } = response;
          this.authService.setMember(data);
          this.toggleLoaders(false);
          this.showMessage('Registration successful', '', 'success');
          this.authService.gotoMembers();
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }
}
