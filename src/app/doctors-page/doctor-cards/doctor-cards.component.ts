import { Component } from '@angular/core';
import { faLocationDot, faStar  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorDetailsComponent {
  faStar = faStar;
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;

}
