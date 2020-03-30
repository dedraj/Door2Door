import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewOrderComponent } from './new-order/new-order.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../config/material.module';
 
@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CustomMaterialModule
     ],
    declarations: [
        NewOrderComponent,
        TrackOrderComponent,
        ContactUsComponent,
        HomeComponent,
    ],
    exports: [ ],
    entryComponents: [ ]
  })
  export class PagesModule {}