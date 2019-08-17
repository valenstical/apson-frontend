import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared';
import { MembersRoutingModule } from './members-routing.module';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { MembersHeaderComponent } from './header/header.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MembersComponent,
    MembersHeaderComponent,
    SetupComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, MembersRoutingModule],
})
export class MembersModule {}
