// import { IPatient } from 'src/app/Models/ipatient';
import { Component } from '@angular/core';
import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-patient-cards',
  templateUrl: './booking-patient-cards.component.html',
  styleUrls: ['./booking-patient-cards.component.css']
})
export class BookingPatientCardsComponent {
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faClock = faClock;

  patientList = [
    { id: 1, name: "احمد جمال ", groupID: 1 },
    { id: 2, name: "سامر هلال ", groupID: 2 },
    { id: 3, name: "يوسف محمد ", groupID: 1 },
  ]

}
