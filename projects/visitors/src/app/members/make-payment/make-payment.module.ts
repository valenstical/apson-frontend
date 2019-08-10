import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { MakePaymentComponent } from './make-payment.component';
import { MessageBoxModule } from '../message-box/message-box.module';

@NgModule({
  declarations: [MakePaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessageBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MakePaymentComponent,
      },
    ]),
  ],
})
export class MakePaymentModule {}
