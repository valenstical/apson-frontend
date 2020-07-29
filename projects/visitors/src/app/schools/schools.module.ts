import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SchoolsComponent,
      },
    ]),
  ],
})
export class SchoolsModule {}
