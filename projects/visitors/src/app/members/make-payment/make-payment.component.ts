import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  BaseComponent,
  RequestService,
  ScriptLoaderService,
  AuthService,
} from 'shared';
import { PaystackWidget } from 'helpers';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
})
export class MakePaymentComponent extends BaseComponent
  implements OnInit, OnDestroy {
  isBusy = false;
  paystackWidget: any;
  constructor(
    private requestServie: RequestService,
    private scriptLoaderService: ScriptLoaderService,
    private authService: AuthService,
    private router: Router,
    private commonService: CommonService,
  ) {
    super();
  }

  ngOnInit() {
    this.commonService.setPageTitle('Make Payment');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  validatePayment(ref: string) {
    this.subscription.add(
      this.requestServie.validatePayment(ref).subscribe(
        _ => {
          this.isBusy = false;
          const member = this.authService.getMember();
          this.authService.setMember({ ...member, isActive: true });
          this.router.navigateByUrl('/members/dashboard');
        },
        error => {
          this.handleError(error);
        },
      ),
    );
  }

  openPaystack(data: any) {
    this.paystackWidget = new PaystackWidget(
      data,
      (response: any) => {
        this.validatePayment(response.reference);
      },
      () => {
        this.isBusy = false;
      },
    );
    this.paystackWidget.open();
  }

  processPayment(data: any) {
    if (!this.paystackWidget) {
      this.scriptLoaderService.load('paystack').then(() => {
        this.openPaystack(data);
      });
    } else {
      this.openPaystack(data);
    }
  }

  startPayment() {
    this.isBusy = true;
    this.subscription.add(
      this.requestServie
        .requestPayment('plan_membership_fee')
        .subscribe(response => {
          const { data } = response;
          this.processPayment(data);
        }),
    );
  }
}
