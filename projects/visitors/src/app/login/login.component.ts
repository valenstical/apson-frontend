import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, BaseComponent } from 'shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnDestroy {
  formData: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    super();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onLogin() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.authService.login(this.formData.value).subscribe(
        response => {
          const { data } = response;
          this.hideAlert = false;
          this.showMessage(
            'Redirecting you...',
            'Log in successful',
            'success',
          );
          this.authService.setMember(data);
          this.authService.gotoMembers();
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }
}
