import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation.component';
import { ReservationAgreeByHospitalComponent } from './components/reservation-agree-by-hospital/reservation-agree-by-hospital.component';

const routes: Routes = [
  { path: '', component: ReservationComponent },

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
    path: 'requested-client',
    component: ReservationAgreeByHospitalComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
