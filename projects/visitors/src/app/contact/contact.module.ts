import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'shared';
import { CommonModule } from '@angular/common';
import { ContactBoxModule } from '../contact-box/contact-box.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ContactComponent,
      },
    ]),
  ],
})
export class ContactModule {}
