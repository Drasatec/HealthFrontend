import { MyBookingPatientPageModule } from './my-booking-patient-page/my-booking-patient-page.module';
import { MyBookingClientPageModule } from './my-booking-client-page/my-booking-client-page.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { BookingModule } from './booking/booking.module';
import { ConfirmModule } from './confirm/confirm.module';
import { DoctorDetailsModule } from './doctor-details/doctor-details.module';
import { DoctorsPageModule } from './doctors-page/doctors-page.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyBookingPatientPageComponent } from './my-booking-patient-page/my-booking-patient-page.component';
import { MyBookingClientPageComponent } from './my-booking-client-page/my-booking-client-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MyBookingPatientPageComponent,
    MyBookingClientPageComponent,
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CoreModule,
    DoctorsPageModule,
    DoctorDetailsModule,
    ConfirmModule,
    BookingModule,
    NgxPaginationModule,
    HttpClientModule,
    CarouselModule,
    MyBookingClientPageModule,
  MyBookingPatientPageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
