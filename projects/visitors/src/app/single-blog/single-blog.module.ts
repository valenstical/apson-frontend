import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleBlogComponent } from './single-blog.component';

@NgModule({
  declarations: [SingleBlogComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SingleBlogComponent,
      },
    ]),
  ],
})
export class SingleBlogModule {}
