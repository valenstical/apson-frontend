import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  BaseComponent,
  Member,
  AuthService,
  RequestService,
  ScriptLoaderService,
} from 'shared';
import { CloudinaryWidget, scrollIntoView } from 'helpers';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent extends BaseComponent
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

  @ViewChild('anchorElement', { static: false }) anchorElement: ElementRef;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private scriptLoaderService: ScriptLoaderService,
    public commonService: CommonService,
  ) {
    super();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.commonService.setPageTitle('My profile');
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
          scrollIntoView(this.anchorElement.nativeElement);
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
