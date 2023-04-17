import { MembersModule } from './members/members.module';
import { HomeModule } from './home/home.module';
import { BookingClientsPageModule } from './booking-clients-page/booking-clients-page.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { BookingPagesComponent } from './booking-pages/booking-pages.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingPagesComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    TooltipModule.forRoot(),
    CoreModule,
    HomeModule,
    MatTabsModule,
    DoctorsPageModule,
    DoctorDetailsModule,
    ConfirmModule,
    BookingModule,
    NgxPaginationModule,
    HttpClientModule,
    CarouselModule,
    BookingClientsPageModule,
    MembersModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
