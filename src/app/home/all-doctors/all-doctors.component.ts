import { IDoctor } from './../../Models/idoctor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  
  doctorList: IDoctor[] = [
  { id: 1, fullName: 'أحمد على', photo: "../../../assets/Images/homeImages/doctor.jpg", specialty: "جراحة الفم والاسنان " },
  {id:2 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:' رامى فريد', specialty:" قلب وأوعية دموية "    },
  {id:3 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:'حسن محمد', specialty:"  صدر وأمراض تنفس "    },];
  
  
  constructor() {
 
  }

}
