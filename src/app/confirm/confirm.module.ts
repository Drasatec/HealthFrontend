import { ReservationDisAgreeByHospitalComponent } from './reservation-dis-agree-by-hospital/reservation-dis-agree-by-hospital.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConfirmComponent } from './confirm.component';
import { ReservationConfirmComponent } from './reservation-confirm/reservation-confirm.component';
import { ReservationDisAgreeByClientComponent } from './reservation-dis-agree-by-client/reservation-dis-agree-by-client.component';
import { ReservationAgreeByHospitalComponent } from './reservation-agree-by-hospital/reservation-agree-by-hospital.component';
import { ReservationAgreebyclientComponent } from './reservation-agree-by-client/reservation-agreebyclient.component';



@NgModule({
  declarations: [
    ConfirmComponent,
    ReservationConfirmComponent,
    ReservationDisAgreeByClientComponent,
    ReservationAgreeByHospitalComponent,
    ReservationAgreebyclientComponent,
    ReservationDisAgreeByHospitalComponent
   
  ],

  imports: [
    CommonModule, FontAwesomeModule,RouterModule
  ],
  exports: [
    ReservationDisAgreeByClientComponent,
    ReservationAgreeByHospitalComponent,
    ReservationAgreebyclientComponent,

  ]
})
export class ConfirmModule { }
