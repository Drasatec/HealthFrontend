import { SharedModule } from './models/shared/shared.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './models/shared/components/shared/shared.component';
import { AuthGuard } from './models/auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      {path:'',
      redirectTo:'home',
    pathMatch:'full'},
      { path: 'booking',
        loadChildren: () => import('./models/booking/booking.module').then(m => m.BookingModule),
        canActivate:[AuthGuard]
      },

      { path: 'reservation',
        loadChildren: () => import('./models/reservation/reservation.module').then(m => m.ReservationModule),
        canActivate:[AuthGuard]
      },
      { path: 'home', loadChildren: () => import('./models/home/home.module').then(m => m.HomeModule) },
      { path: 'doctor', loadChildren: () => import('./models/doctor/doctor.module').then(m => m.DoctorModule), data: {breadCrum: "Doctors"} },
      { path: 'member', loadChildren: () => import('./models/member/member.module').then(m => m.MemberModule) },
      { path: 'about-us', loadChildren: () => import('./models/about-us/about-us.module').then(m => m.AboutUsModule) },

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./models/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
