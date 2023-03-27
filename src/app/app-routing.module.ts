
import { ConfirmComponent } from './confirm/confirm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DoctorPageComponent } from './doctors-page/doctors-page.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './home/home.page';
import { ReservationDisAgreeByClientComponent } from './confirm/reservation-dis-agree-by-client/reservation-dis-agree-by-client.component';
import { ReservationAgreeByHospitalComponent } from './confirm/reservation-agree-by-hospital/reservation-agree-by-hospital.component';
import { ReservationDisAgreeByHospitalComponent } from './confirm/reservation-dis-agree-by-hospital/reservation-dis-agree-by-hospital.component';
import { ReservationAgreebyclientComponent } from './confirm/reservation-agree-by-client/reservation-agreebyclient.component';
import { ListOfPatientComponent } from './booking/list-of-patient/list-of-patient.component';
import { BookingByPatientComponent } from './booking/booking-by-patient/booking-by-patient.component';
import { BookingByClientComponent } from './booking/booking-by-client/booking-by-client.component';
import { MyBookingClientPageComponent } from './my-booking-client-page/my-booking-client-page.component';
import { FutureBookingClientComponent } from './my-booking-client-page/future-booking-client/future-booking-client.component';

 
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'doctors',
    component: DoctorPageComponent,
  },
  {
    path: 'doctor-details',
    component: DoctorDetailsComponent ,
  },
  {
    path: 'reservation-confirm',
    component: ConfirmComponent ,
  },
  
  {
    path: 'agree-hospital',
    component: ReservationAgreeByHospitalComponent ,
  },
  {
    path: 'disagree-hospital',
    component: ReservationDisAgreeByHospitalComponent ,
  },
  {
    path: 'agree-client',
    component: ReservationAgreebyclientComponent ,
  },
  {
    path: 'disagree-client',
    component: ReservationDisAgreeByClientComponent ,
  },
  {
    path: 'booking-by-client',
    component: BookingByClientComponent ,
  },
  {
    path: 'booking-by-patient',
    component: BookingByPatientComponent ,
  },
  {
    path: 'list-of-patient',
    component: ListOfPatientComponent,
  },
  {
    path: 'my-booking-client',
    component: MyBookingClientPageComponent,
  },
  {
    path: 'future-booking-client',
    component: FutureBookingClientComponent,
  },


  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
