import { Component } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-by-client',
  templateUrl: './booking-by-client.component.html',
  styleUrls: ['./booking-by-client.component.css']
})
export class BookingByClientComponent {
  faLocationDot = faLocationDot;
}