import { NgModule } from '@angular/core';
import { ContactBoxComponent } from './contact-box.component';
import { SharedModule } from 'shared';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContactBoxComponent],
  exports: [ContactBoxComponent],
  imports: [CommonModule, SharedModule],
})
export class ContactBoxModule {}
