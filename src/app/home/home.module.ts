import { DoctorsPageModule } from './../doctors-page/doctors-page.module';
import { HomeComponent} from './home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { AllSpecialtyComponent } from './all-specialty/all-specialty.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    CoverComponent,
    AllDoctorsComponent,
    AllSpecialtyComponent
  ],
  imports: [
    CommonModule,
    DoctorsPageModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
