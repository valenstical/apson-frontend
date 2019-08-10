import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { BusyComponent } from './components/busy/busy.component';
import { SchoolBoxComponent } from './components/school-box/school-box.component';
import { RouterModule } from '@angular/router';
import { SimpleSelectComponent } from './components/simple-select/simple-select.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageTransitionComponent } from './components/page-transition/page-transition.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    SubmitButtonComponent,
    AlertComponent,
    InputComponent,
    SelectComponent,
    SimpleSelectComponent,
    BusyComponent,
    SchoolBoxComponent,
    NotFoundComponent,
    PageTransitionComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BackButtonComponent,
    SubmitButtonComponent,
    AlertComponent,
    InputComponent,
    SelectComponent,
    BusyComponent,
    SimpleSelectComponent,
    SchoolBoxComponent,
    NotFoundComponent,
    PageTransitionComponent,
  ],
})
export class SharedModule {}
