import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VisitorsRoutingModule } from './visitors-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'shared';
import { VisitorsComponent } from './visitors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    VisitorsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, VisitorsRoutingModule],
})
export class VisitorsModule {}
