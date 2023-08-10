import { Component, Input, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/Models/doctor.model';

import { environment } from 'src/environment/environment.prod';
// import { IDoctor } from 'src/app/Models/names.model';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorDetailsComponent implements OnInit{
  // faStar = faStar;
  // faLocationDot = faLocationDot;
  // faDollarSign = faDollarSign;
  imgUrl=`${environment.imgUrl}`;
  @Input() selectedDate!:Date
 @Input() doctors:DoctorModel[]=[]
  ngOnInit(): void {
    console.log(this.selectedDate)
  }
}
