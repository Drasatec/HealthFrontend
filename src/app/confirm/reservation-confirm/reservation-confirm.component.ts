import { Component } from '@angular/core';
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.css']
})
export class ReservationConfirmComponent {
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;
}
