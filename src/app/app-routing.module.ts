import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ConfirmComponent } from './confirm/confirm.component';
import { DoctorPageComponent } from './doctors-page/doctors-page.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './home/home.page';
import { ReservationAgreeByHospitalComponent } from './confirm/reservation-agree-by-hospital/reservation-agree-by-hospital.component';
import { BookingByPatientComponent } from './booking/booking-by-patient/booking-by-patient.component';
import { BookingByClientComponent } from './booking/booking-by-client/booking-by-client.component';
import { BookingPagesComponent } from './booking-pages/booking-pages.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MembersComponent } from './members/members.component';


 
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
    component: ReservationAgreeByHospitalComponent ,
  },
  {
    path: 'agree-client',
    component: ReservationAgreeByHospitalComponent ,
  },
  {
    path: 'disagree-client',
    component: ReservationAgreeByHospitalComponent ,
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
    path: 'booking-pages',
    component: BookingPagesComponent ,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'member-details',
    component: MemberDetailsComponent,
  },
  {
    path: 'member-details/:id',
    component: MemberDetailsComponent,
  },
  {
    path: 'add-member',
    component:  AddMemberComponent,
  },
  
  {
    path: 'doctor-details/:id',
    component: DoctorDetailsComponent,
  },
  {
    path:'update-member',
    component: AddMemberComponent,
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
