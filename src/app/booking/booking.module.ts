import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingByClientComponent } from './booking-by-client/booking-by-client.component';
import { BookingByPatientComponent } from './booking-by-patient/booking-by-patient.component';
import { ListOfPatientComponent } from './list-of-patient/list-of-patient.component';




@NgModule({
  declarations: [
    BookingByClientComponent,
    BookingByPatientComponent,
    ListOfPatientComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule,RouterModule,
  ]
})
export class BookingModule { }
