// we will remove all this module

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  exports: []
  
})
export class BookingClientsOrPatinetsPageModule { }
