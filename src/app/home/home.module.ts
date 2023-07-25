import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CoverComponent } from './components/cover/cover.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AllSpecialtyComponent } from './components/all-specialty/all-specialty.component';
import { DoctorModule } from '../doctor/doctor.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CoverComponent,
    AllSpecialtyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule,
    CarouselModule.forRoot(),
    DoctorModule
  ],
  exports:[
  ]
})
export class HomeModule { }
