import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPatientCardsComponent } from './booking-patient-cards/booking-patient-cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    BookingPatientCardsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule
  ]
})
export class BookingPagesModule { }
