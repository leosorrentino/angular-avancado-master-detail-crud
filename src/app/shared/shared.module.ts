import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorsComponent } from './components/form-field-errors/form-field-errors.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],  
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorsComponent
  ],
  exports: [
    //shared module
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorsComponent
    
  ]
})
export class SharedModule { }
