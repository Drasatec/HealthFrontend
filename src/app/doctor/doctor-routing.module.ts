import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ConfirmComponent } from '../reservation/components/confirm/confirm.component';
import { DoctorDetailsComponent } from './components/doctor-cards/doctor-cards.component';
import { DoctorPageComponent } from './components/doctors-page/doctors-page.component';

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
    path: 'doctor-details',
    component: DoctorDetailsComponent ,
  },
  {
    path: 'reservation-confirm',
    component: ConfirmComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
