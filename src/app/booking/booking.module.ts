import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingByClientComponent } from './components/booking-by-client/booking-by-client.component';
import { BookingByPatientComponent } from './components/booking-by-patient/booking-by-patient.component';
import { ListOfPatientComponent } from './components/list-of-patient/list-of-patient.component';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingPagesComponent } from './components/booking-pages/booking-pages.component';
import { BookingPatientCardsComponent } from './components/booking-patient-cards/booking-patient-cards.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    BookingByClientComponent,
    BookingByPatientComponent,
    ListOfPatientComponent,
    BookingComponent,
    BookingPagesComponent,
    BookingPatientCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
