import { ISpecialty } from './../../Models/ispecialty';
import { IDoctor } from './../../Models/idoctor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  
  doctorList: IDoctor[] = [
  { id: 1, fullName: 'أحمد على', photo: "../../../assets/Images/homeImages/doctor.jpg", specialId: 1 },
  {id:2 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:' رامى فريد',specialId: 3  },
  {id:3 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:'حسن محمد',specialId: 2  },];
  
  speciaList:ISpecialty[]=[
    { id: 1, name: "قلب وأوعية دموية ", hospitalId: 1 },
      {id:2 , name: "قلب وأوعية دموية " ,hospitalId: 1},
      {id:3 , name: "قلب وأوعية دموية " ,hospitalId: 1},
      {id:4 , name: "قلب وأوعية دموية " ,hospitalId: 1}
  ]
  
  constructor() {
 
  }

}
























