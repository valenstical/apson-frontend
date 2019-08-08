import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleSchoolComponent } from './single-school.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { ContactBoxModule } from '../contact-box/contact-box.module';

@NgModule({
  declarations: [SingleSchoolComponent],
  imports: [
    CommonModule,
    ContactBoxModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SingleSchoolComponent,
      },
    ]),
  ],
})
export class SingleSchoolModule {}
