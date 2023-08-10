import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './components/doctor-filter-components/doctor-cards/doctor-cards.component';
import { DoctorPageComponent } from './components/doctor-filter-components/doctors-page/doctors-page.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';

const routes: Routes = [
  { path: '', component: DoctorPageComponent },

  {
    path: 'doctor-details/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'doctors/:hospitalId/:medicalSpecialtyId/:docId',
    component: DoctorPageComponent,
    data: { breadcrumb: {alias: 'Doctors'}}
  },
  {
    path: 'AppointmentBooking/:DoctorId/:HospitalId/:WorkingPeriodId/:date',
    component: AppointmentBookingComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
