import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { MessageBoxComponent } from './message-box.component';

@NgModule({
  declarations: [MessageBoxComponent],
  imports: [CommonModule, SharedModule],
  exports: [MessageBoxComponent],
})
export class MessageBoxModule {}
