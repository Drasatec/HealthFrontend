import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home',
    data: {breadCrum: "Home"}
  },
  { path: 'booking', loadChildren: () => import('./models/booking/booking.module').then(m => m.BookingModule) },
  { path: 'home', loadChildren: () => import('./models/home/home.module').then(m => m.HomeModule) },
  { path: 'doctor', loadChildren: () => import('./models/doctor/doctor.module').then(m => m.DoctorModule), data: {breadCrum: "Doctors"} },
  { path: 'reservation', loadChildren: () => import('./models/reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'member', loadChildren: () => import('./models/member/member.module').then(m => m.MemberModule) },
  { path: 'about-us', loadChildren: () => import('./models/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'auth', loadChildren: () => import('./models/auth/auth.module').then(m => m.AuthModule) },

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
