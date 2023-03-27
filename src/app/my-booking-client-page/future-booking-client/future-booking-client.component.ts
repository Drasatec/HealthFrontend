import { Component } from '@angular/core';
import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-future-booking-client',
  templateUrl: './future-booking-client.component.html',
  styleUrls: ['./future-booking-client.component.css']
})
export class FutureBookingClientComponent {
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faClock = faClock;
}
