import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TermsComponent,
      },
    ]),
  ],
})
export class TermsModule {}
