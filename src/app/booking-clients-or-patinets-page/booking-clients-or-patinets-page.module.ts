import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingCardsComponent } from './booking-cards/booking-cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BookingCardsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ]
})
export class BookingClientsOrPatinetsPageModule { }
