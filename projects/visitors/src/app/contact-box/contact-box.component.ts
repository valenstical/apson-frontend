import { Component, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent, RequestService } from 'shared';
import { scrollIntoView, APSON_EMAIL } from 'helpers';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
})
export class ContactBoxComponent extends BaseComponent implements OnDestroy {
  @Input() scrollView: HTMLElement;
  @Input() receiver = APSON_EMAIL;

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    subject: ['Enquiry', Validators.required],
    message: ['', Validators.required],
    receiver: [this.receiver],
  });

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
  ) {
    super();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
  sendMessage() {
    this.toggleLoaders(true);
    this.subscription.add(
      this.requestService.post('contact', this.formGroup.value).subscribe(
        () => {
          this.toggleLoaders(false);
          scrollIntoView(this.scrollView);
          this.formGroup.reset({
            name: '',
            phone: '',
            message: '',
            email: '',
            subject: 'Enquiry',
            receiver: this.receiver,
          });
          this.showMessage(
            'Thank you for your message. Our representative will contact you shortly.',
            'Message Sent',
            'success',
          );
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }
}
