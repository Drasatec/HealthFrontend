import { Component } from '@angular/core';
import { faLocationDot, faStar  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-special-card-doctor',
  templateUrl: './special-card-doctor.component.html',
  styleUrls: ['./special-card-doctor.component.css']
})
export class SpecialCardDoctorComponent {
  faStar = faStar;
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;
}
