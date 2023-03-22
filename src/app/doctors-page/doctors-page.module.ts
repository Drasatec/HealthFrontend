import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { DoctorPageComponent } from './doctors-page.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DoctorDetailsComponent } from './doctor-cards/doctor-cards.component';
import { DoctorFilterComponent } from './doctor-filter/doctor-filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { PaginationComponent } from './pagination/pagination.component';




@NgModule({
  declarations: [
    SearchComponent,
    DoctorPageComponent,
    DoctorDetailsComponent,
    DoctorFilterComponent,
    AppointmentBookingComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule ,


  ],
  exports: [
    SearchComponent,DoctorDetailsComponent,DoctorFilterComponent
  ]
})
export class DoctorsPageModule { }
