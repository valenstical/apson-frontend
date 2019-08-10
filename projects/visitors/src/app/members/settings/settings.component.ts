import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  BaseComponent,
  Member,
  AuthService,
  RequestService,
  ScriptLoaderService,
} from 'shared';
import { CloudinaryWidget } from 'helpers';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  member: Member;
  widget: any;
  isUploading = false;
  formData: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    sex: ['Male'],
  });
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private scriptLoaderService: ScriptLoaderService,
  ) {
    super();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.member = this.authService.getMember();
    const { name, state, email, phone, sex } = this.member;
    this.formData.setValue({ name, state, email, phone, sex });
  }

  onUpdateMember() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.requestService.updateMember(this.formData.value).subscribe(
        _ => {
          const member = this.authService.getMember();
          this.authService.setMember({ ...member, ...this.formData.value });
          this.toggleLoaders(false);
          this.showMessage('Your profile has been updated', '', 'success');
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }
  updateProfileImage(url: string) {
    this.requestService.updateProfileImage({ url }).subscribe(_ => {
      this.member.image = url;
      this.authService.setMember({ ...this.member });
      this.isUploading = false;
    });
  }
  changeImage() {
    this.isUploading = true;
    if (!this.widget) {
      this.scriptLoaderService.load('cloudinary').then(data => {
        this.widget = new CloudinaryWidget(
          (url: string) => {
            this.updateProfileImage(url);
          },
          () => {
            this.isUploading = false;
          },
        );
        this.widget.open();
      });
    } else {
      this.widget.open();
    }
  }
}
