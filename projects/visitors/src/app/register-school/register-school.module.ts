import { NgModule } from '@angular/core';
import { RegisterSchoolComponent } from './register-school.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [RegisterSchoolComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RegisterSchoolComponent,
      },
    ]),
  ],
})
export class RegisterSchoolModule {}
