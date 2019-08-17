import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { AddSchoolComponent } from './add-school.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { MessageBoxModule } from '../message-box/message-box.module';

@NgModule({
  declarations: [AddSchoolComponent, BasicDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessageBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AddSchoolComponent,
      },
    ]),
  ],
})
export class AddSchoolModule {}
