import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/components/base-component';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  formData: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    super();
  }
  ngOnInit() {
    if (this.authService.isLoggedIn('/members/my-schools')) {
      this.router.navigateByUrl('/members/my-schools');
    }
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
          this.router.navigateByUrl(this.authService.url);
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }
}
