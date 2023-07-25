import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ReservationAgreeByHospitalComponent } from './components/reservation-agree-by-hospital/reservation-agree-by-hospital.component';
import { ReservationConfirmComponent } from './components/reservation-confirm/reservation-confirm.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ReservationComponent,
    ConfirmComponent,
    ReservationConfirmComponent,
    ReservationAgreeByHospitalComponent,
    ReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    CarouselModule
  ],
  exports:[
    ReservationDetailsComponent
  ]
})
export class ReservationModule { }
