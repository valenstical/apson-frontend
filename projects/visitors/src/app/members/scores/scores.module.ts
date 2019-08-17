import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoresComponent } from './scores.component';

@NgModule({
  declarations: [ScoresComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ScoresComponent,
      },
    ]),
  ],
})
export class ScoresModule {}
