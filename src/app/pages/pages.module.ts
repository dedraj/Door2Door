import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewOrderComponent,Myform } from './new-order/new-order.component';
import { TrackOrderComponent} from './track-order/track-order.component';
import { CheckStatus} from './track-order/track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../config/material.module';
import { Step1Component } from './new-order/step1/step1.component';
import { Step2Component } from './new-order/step2/step2.component';
import { Step3Component, ConfirmDialog } from './new-order/step3/step3.component';
import { TextInputComponent } from './new-order/text-input/text-input.component';
// import { DetailFormComponent } from '../components/detail-form/detail-form.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        FormsModule,
        ComponentsModule
     ],
    declarations: [
        // DetailFormComponent,
        ConfirmDialog,
        NewOrderComponent,
        TrackOrderComponent,
        ContactUsComponent,
        HomeComponent,
        CheckStatus,
        Step1Component,
        Step2Component,
        Step3Component,
        TextInputComponent,

    ],
        exports: [],
    entryComponents: []
  })
  export class PagesModule {}