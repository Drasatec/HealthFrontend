import { Component } from '@angular/core';
import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-cards',
  templateUrl: './booking-cards.component.html',
  styleUrls: ['./booking-cards.component.css']
})
export class BookingCardsComponent {
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faClock = faClock;

  
}
