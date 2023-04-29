// // we will remove all this module

import { BookingClientsPageComponent } from './booking-clients-page.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingCardsComponent } from './booking-cards/booking-cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BookingCardsComponent, BookingClientsPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [BookingCardsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookingClientsPageModule {}
