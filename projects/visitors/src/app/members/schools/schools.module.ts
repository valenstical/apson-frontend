import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { SchoolsComponent } from './schools.component';
import { MessageBoxModule } from '../message-box/message-box.module';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessageBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SchoolsComponent,
      },
    ]),
  ],
})
export class MemberSchoolsModule {}
