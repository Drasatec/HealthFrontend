// we will remove all this module

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
    MdbCheckboxModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  exports: [
    FutureBookingClientComponent,OrderBookingComponent

  ]
})
export class MyBookingPageModule { }
