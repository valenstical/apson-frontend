import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { AddSchoolComponent } from './add-school.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FullDetailsComponent } from './full-details/full-details.component';
import { AmenitiesDetailsComponent } from './amenities-details/amenities-details.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { MessageBoxModule } from '../message-box/message-box.module';

@NgModule({
  declarations: [
    AddSchoolComponent,
    BasicDetailsComponent,
    LocationDetailsComponent,
    ContactDetailsComponent,
    FullDetailsComponent,
    AmenitiesDetailsComponent,
    ImageDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MessageBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AddSchoolComponent,
      },
    ]),
  ],
})
export class AddSchoolModule {}
