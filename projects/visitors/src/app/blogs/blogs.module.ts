import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: BlogsComponent,
      },
    ]),
  ],
})
export class BlogModule {}
