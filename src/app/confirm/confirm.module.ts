import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ConfirmComponent } from './confirm.component';
import { ReservationConfirmComponent } from './reservation-confirm/reservation-confirm.component';
import { ReservationAgreeByHospitalComponent } from './reservation-agree-by-hospital/reservation-agree-by-hospital.component';



@NgModule({
  declarations: [
    ConfirmComponent,
    ReservationConfirmComponent,
    ReservationAgreeByHospitalComponent,

   
  ],

  imports: [
    CommonModule, FontAwesomeModule,RouterModule 
  ],
  exports: [
    ReservationAgreeByHospitalComponent,

  ]
})
export class ConfirmModule { }
