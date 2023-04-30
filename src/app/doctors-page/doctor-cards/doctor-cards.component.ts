import { Component } from '@angular/core';
import { faLocationDot, faStar  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { IDoctor } from 'src/app/Models/idoctor';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorDetailsComponent {
  faStar = faStar;
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;

  doctorList: IDoctor[] = [
    {id:1, fullName: 'أحمد على',  photo:"../../../assets/Images/homeImages/doctor.jpg",   special: [{id: 1, name: "قلب وأوردة ",        hospitalId:2}] },
    {id:2, fullName:' رامى فريد', photo:"../../../assets/Images/homeImages/doctor.jpg",   special: [{id: 1, name: " جهاز هضمى وباطنة ",hospitalId:2}] },
    {id:3, fullName:'حسن محمد',   photo:"../../../assets/Images/homeImages/doctor.jpg",   special: [{id: 1, name: "علاج طبيعى  ",        hospitalId:2}] },
  ]

}
