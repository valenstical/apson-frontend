import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ResetPasswordComponent,
      },
    ]),
  ],
})
export class ResetPasswordModule {}
