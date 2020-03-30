import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './config/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesModule } from './pages'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    PagesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [PagesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
