import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/models/auth/services/auth.service';
import { BookingService } from 'src/app/models/services/booking.service';
// import { IPatient } from 'src/app/Models/ipatient';


@Component({
  selector: 'app-booking-pages',
  templateUrl: './booking-pages.component.html',
  styleUrls: ['./booking-pages.component.css']
})
export class BookingPagesComponent implements OnInit{
  // faLocationDot = faLocationDot;
  // faCalendarDays = faCalendarDays;
  // faClock = faClock;
  constructor(private bookingservice:BookingService,private authservice:AuthService){}
selected:number=0
  tabList: [] |any = [
    {id:0 , name:"القادمة "},
    {id:1, name:"السابقة  "},

]
patientId:number=0
ngOnInit(): void {
  this.patientId = +this.authservice.currentPatientId
  let pay={
    bookingTime:'future',
        patientId:this.patientId
  }
  this.getBooking(pay)

}
  get(e:any){
    console.log(e)
    this.selected=e
    if(this.selected === 0){
      let pay={
        bookingTime:'future',
        patientId:this.patientId
      }
    this.getBooking(pay)

    }else{
      let pay={
        bookingTime:"past",
        patientId:this.patientId

      }
    this.getBooking(pay)

    }
  }
  bookingList:any
  getBooking(paylod:any){
    this.bookingservice.getBooking(paylod).subscribe({
      next:next=>{
        this.bookingList = next.data
      }
    }
    )
  }
}
