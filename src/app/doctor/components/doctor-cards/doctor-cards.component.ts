import { Component, Input } from '@angular/core';
import { faLocationDot, faStar  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { DoctorModel } from 'src/app/Models/doctor.model';
// import { IDoctor } from 'src/app/Models/names.model';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorDetailsComponent {
  faStar = faStar;
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;

 @Input() doctors:DoctorModel[]=[]

}
