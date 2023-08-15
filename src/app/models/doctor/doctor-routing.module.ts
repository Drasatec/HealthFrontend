import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './components/doctor-filter-components/doctor-cards/doctor-cards.component';
import { DoctorPageComponent } from './components/doctor-filter-components/doctors-page/doctors-page.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';
import { SpecialCardDoctorComponent } from './components/special-card-doctor/special-card-doctor.component';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';

const routes: Routes = [
  { path: '', component: DoctorPageComponent },

  {
    path: 'doctor-details/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'doctors/:hosId/:specialtyId/:docId',
    component: DoctorPageComponent,
    data: { breadcrumb: {alias: 'Doctors'}}
  },
  {
    path: 'AppointmentBooking/:DoctorId/:HospitalId/:WorkingPeriodId/:date',
    component: AppointmentBookingComponent ,
  },
  {
    path: 'doctor/:id',
    component: SpecialCardDoctorComponent ,
  },
  {
    path: 'doctors',
    component: AllDoctorsComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
