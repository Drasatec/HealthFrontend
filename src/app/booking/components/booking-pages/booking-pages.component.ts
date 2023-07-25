import { Component } from '@angular/core';
// import { IPatient } from 'src/app/Models/ipatient';
import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-pages',
  templateUrl: './booking-pages.component.html',
  styleUrls: ['./booking-pages.component.css']
})
export class BookingPagesComponent {
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faClock = faClock;

  tabList: [] |any = [
    {id:1 , name:"القادمة "},
    {id:2, name:"السابقة  "},

]

  patientList= [
    { id: 1, name: "احمد جمال ", groupID: 1 },
    { id: 2, name: "سامر هلال ", groupID: 2 },
    { id: 3, name: "يوسف محمد ", groupID: 1 },
  ]

}
