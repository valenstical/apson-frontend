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
        path: 'settings',
        pathMatch: 'full',
        loadChildren: () =>
          import('./settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path: 'schools/:id',
        pathMatch: 'full',
        canActivate: [ActiveMemberGuard],
        loadChildren: () =>
          import('./schools/schools.module').then(m => m.MemberSchoolsModule),
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
