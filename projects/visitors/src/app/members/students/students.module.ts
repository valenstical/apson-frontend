import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StudentsComponent,
      },
    ]),
  ],
})
export class StudentsModule {}
