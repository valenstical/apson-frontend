import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, ActiveMemberGuard } from 'shared';
import { MembersComponent } from './members.component';

const routes: Routes = [
  {
    path: 'members',
    canActivate: [AuthGuard],
    component: MembersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/members/dashboard',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'students',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./students/students.module').then(m => m.StudentsModule),
      },
      {
        path: 'scores',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./scores/scores.module').then(m => m.ScoresModule),
      },
      {
        path: 'settings',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path: 'profile',
        pathMatch: 'full',
        loadChildren: () =>
          import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'add-school',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./add-school/add-school.module').then(m => m.AddSchoolModule),
      },
      {
        path: 'membership-renewal',
        pathMatch: 'full',
        loadChildren: () =>
          import('./make-payment/make-payment.module').then(
            m => m.MakePaymentModule,
          ),
      },
    ],
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
export class MembersRoutingModule {}
