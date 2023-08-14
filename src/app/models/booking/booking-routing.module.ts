import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingPagesComponent } from './components/booking-pages/booking-pages.component';
import { BookingByClientComponent } from './components/booking-by-client/booking-by-client.component';
import { BookingByPatientComponent } from './components/booking-by-patient/booking-by-patient.component';

const routes: Routes = [
  { path: '', component: BookingComponent },

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
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
