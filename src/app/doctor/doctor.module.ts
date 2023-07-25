import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { SpecialCardDoctorComponent } from './components/special-card-doctor/special-card-doctor.component';
import { SharedModule } from '../shared/shared.module';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';
import { DoctorDetailsComponent } from './components/doctor-cards/doctor-cards.component';
import { DoctorFilterComponent } from './components/doctor-filter/doctor-filter.component';
import { DoctorPageComponent } from './components/doctors-page/doctors-page.component';
import { ReservationModule } from '../reservation/reservation.module';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';


@NgModule({
  declarations: [
    DoctorComponent,
    SpecialCardDoctorComponent,
    AppointmentBookingComponent,
    DoctorDetailsComponent,
    DoctorFilterComponent,
    DoctorPageComponent,
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    ReservationModule
  ],
  exports:[
    AllDoctorsComponent
  ]
})
export class DoctorModule { }