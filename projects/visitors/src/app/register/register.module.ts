import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RegisterComponent,
      },
    ]),
  ],
})
export class RegsiterModule {}
