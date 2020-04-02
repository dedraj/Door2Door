import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CustomMaterialModule } from '../config/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    DetailFormComponent, 
],
exports: [DetailFormComponent],
})
export class ComponentsModule { }
