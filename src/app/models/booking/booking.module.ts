import { MatDialogModule } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingByClientComponent } from './components/booking-by-client/booking-by-client.component';
import { BookingByPatientComponent } from './components/booking-by-patient/booking-by-patient.component';
import { ListOfPatientComponent } from './components/list-of-patient/list-of-patient.component';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingPagesComponent } from './components/booking-pages/booking-pages.component';
import { BookingPatientCardsComponent } from './components/booking-patient-cards/booking-patient-cards.component';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { ReservationConfirmComponent } from './components/reservation-confirm/reservation-confirm.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    BookingByClientComponent,
    BookingByPatientComponent,
    ListOfPatientComponent,
    BookingComponent,
    BookingPagesComponent,
    BookingPatientCardsComponent,
    ReservationConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookingRoutingModule,
    SharedModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],

})
export class BookingModule { }
