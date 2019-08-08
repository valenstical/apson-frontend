import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/login.guard';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then(m => m.PrivacyModule),
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegsiterModule),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./reset-password/reset-password.module').then(
        m => m.ResetPasswordModule,
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        m => m.ForgotPasswordModule,
      ),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogModule),
  },

  {
    path: 'blog/news',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogModule),
  },
  {
    path: 'blog/publications',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogModule),
  },
  {
    path: 'blog/:id',
    loadChildren: () =>
      import('./single-blog/single-blog.module').then(m => m.SingleBlogModule),
  },
  {
    path: 'schools',
    loadChildren: () =>
      import('./schools/schools.module').then(m => m.SchoolsModule),
  },
  {
    path: 'schools/:id',
    loadChildren: () =>
      import('./single-school/single-school.module').then(
        m => m.SingleSchoolModule,
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true,
      urlUpdateStrategy: 'eager',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
