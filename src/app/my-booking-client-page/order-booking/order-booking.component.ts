import { Component } from '@angular/core';
import { faClock ,faCalendarDays} from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-booking',
  templateUrl: './order-booking.component.html',
  styleUrls: ['./order-booking.component.css']
})
export class OrderBookingComponent {
faLocationDot=faLocationDot;
  faClock = faClock;
  faCalendarDays = faCalendarDays;
}
