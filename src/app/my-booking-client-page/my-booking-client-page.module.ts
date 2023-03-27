import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FutureBookingClientComponent } from './future-booking-client/future-booking-client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { OrderBookingComponent } from './order-booking/order-booking.component';



@NgModule({
  declarations: [
    FutureBookingClientComponent,
    OrderBookingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MdbCheckboxModule
  ],
  exports: [
    FutureBookingClientComponent,

  ]
})
export class MyBookingClientPageModule { }
