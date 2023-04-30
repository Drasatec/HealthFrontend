
import { IDoctor } from './../../Models/idoctor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  
  doctorList: IDoctor[] = [
  { id: 1, fullName: 'أحمد على', photo: "../../../assets/Images/homeImages/doctor.jpg", special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
  {id:2 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:' رامى فريد', special: [{id: 1, name: " جراحة عامة ",hospitalId:3}] },
  {id:3 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:'حسن محمد', special: [{id: 1, name: "نساء وتوليد   ",hospitalId:1}] }];

  constructor() {
 
  }

}
























