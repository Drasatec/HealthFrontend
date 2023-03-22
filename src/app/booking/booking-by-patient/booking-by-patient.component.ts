import { Component } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-by-patient',
  templateUrl: './booking-by-patient.component.html',
  styleUrls: ['./booking-by-patient.component.css']
})
export class BookingByPatientComponent {
  faLocationDot = faLocationDot;
}
