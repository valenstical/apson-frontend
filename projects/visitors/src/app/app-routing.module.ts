import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SchoolsComponent } from './schools/schools.component';
import { SingleSchoolComponent } from './single-school/single-school.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'blog', component: BlogsComponent, pathMatch: 'full' },
  { path: 'blog/news', component: BlogsComponent, pathMatch: 'full' },
  { path: 'blog/publications', component: BlogsComponent, pathMatch: 'full' },
  { path: 'schools', component: SchoolsComponent, pathMatch: 'full' },
  { path: 'schools/:id', component: SingleSchoolComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
