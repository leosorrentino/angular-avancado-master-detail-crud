import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],  
  declarations: [],
  exports: [
    //shared module
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
