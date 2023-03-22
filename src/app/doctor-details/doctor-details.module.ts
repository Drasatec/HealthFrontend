import { DoctorsPageModule } from './../doctors-page/doctors-page.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DoctorDetailsComponent } from './doctor-details.component';
import { SpecialCardDoctorComponent } from './special-card-doctor/special-card-doctor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';




@NgModule({
  declarations: [DoctorDetailsComponent, SpecialCardDoctorComponent, ReservationDetailsComponent],
  imports: [
      CommonModule
    , DoctorsPageModule
    ,   FontAwesomeModule,
      
  ],
  exports: [
 
  ]
})
export class DoctorDetailsModule {  }
