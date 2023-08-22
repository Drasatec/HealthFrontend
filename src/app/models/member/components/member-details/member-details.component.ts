import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/models/services/booking.service';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { IPatient } from 'src/app/Models/ipatient';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent {

  // faLocationDot = faLocationDot;
  patientId: number = 0;
  patient:any
  patientList=[];
  constructor(private activeParam:ActivatedRoute,private bookingservice:BookingService) {

  }
  ngOnInit() {
    this.getActiveParam()
  }
  getActiveParam() {
    this.activeParam.params.subscribe((res:any) => {
      console.log(res);
      this.patientId = res.id;
     this.getPatientById(this.patientId)
    })
  }

  getPatientById(id:any) {
    this.bookingservice.getPatient(id).subscribe(
      (res)=>{
        this.patient=res
      }
    )


  }
}
