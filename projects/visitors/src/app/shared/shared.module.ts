import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../shared/components/back-button/back-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { BusyComponent } from './components/busy/busy.component';
import { SchoolBoxComponent } from './components/school-box/school-box.component';
import { RouterModule } from '@angular/router';
import { SimpleSelectComponent } from './components/simple-select/simple-select.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    PageNotFoundComponent,
    NotFoundComponent,
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
  ],
})
export class SharedModule { }
