import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FutureBookingClientComponent } from './future-booking-client/future-booking-client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FutureBookingClientComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FutureBookingClientComponent
  ]
})
export class MyBookingClientPageModule { }
