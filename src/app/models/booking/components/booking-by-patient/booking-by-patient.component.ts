import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationConfirmComponent } from '../reservation-confirm/reservation-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { DoctorInfoModel, DoctorWorkPeriodModel } from 'src/app/models/Models/doctor.model';
import { VisitTypeModel } from 'src/app/models/Models/names.model';
import { DoctorService } from 'src/app/models/services/doctor.service';
import { LookupService } from 'src/app/models/services/lookup.service';
import { environment } from 'src/environment/environment.prod';
import { AuthService } from 'src/app/models/auth/services/auth.service';

@Component({
  selector: 'app-booking-by-patient',
  templateUrl: './booking-by-patient.component.html',
  styleUrls: ['./booking-by-patient.component.css']
})
export class BookingByPatientComponent implements OnInit{
  // faLocationDot = faLocationDot;
  params:any;
  doctor!:DoctorInfoModel;
  imgUrl=`${environment.imgUrl}`;
  workPeriod!:DoctorWorkPeriodModel;
  typeVisit:VisitTypeModel[]=[]
  days=[{id:1,name:"Saturday"},{id:2,name:"Sunday"},{id:3,name:"Monday"},{id:4,name:"Tuesday"},{id:5,name:"Wednesday"},{id:6,name:"Thursday"},{id:7,name:"Friday"}]

  constructor(
    private route:ActivatedRoute,
    private _doctorservice:DoctorService,
    private _lookupservic:LookupService,
    private datePipe: DatePipe,
    private router:Router,
    public dialog: MatDialog,
    private authservice:AuthService

  ){}
  form=new FormGroup ({
    PatientId:new FormControl<string>(''),
    HospitalId:new FormControl<number>(0),
    SpecialtyId:new FormControl(1),
    DoctorId:new FormControl<number>(0),
    WorkingPeriodId:new FormControl<number>(0),
    TypeVisitId:new FormControl<number>(0),
    ClinicId:new FormControl<number>(0),
    BookingStatusId:new FormControl(1),
    VisitingDate:new FormControl(''),
    dayNumber:new FormControl<number>(0),
    BookingReason:new FormControl(''),
  })
  userId:string=''
  ngOnInit(): void {
    this.getVisitType()
    this.route.queryParams.subscribe(
      (params)=>{
        const decodedData = JSON.parse(decodeURIComponent(params['data']));
      console.log(decodedData);
        this.params=decodedData
        this.getDoctorInfo(this.params.DoctorId)
        this.getPeriodInfoDoctor(this.params.DoctorId,this.params.WorkingPeriodId)
        this.filterDay(this.params.date)
        if(this.authservice.currentUserId){
          this.userId = this.authservice.currentUserId
        }
        console.log(this.authservice.currentUserId)
        this.form.patchValue({
          PatientId:this.userId,
          DoctorId:+this.params.DoctorId,
          VisitingDate:this.params.date,
          WorkingPeriodId:+this.params.WorkingPeriodId
      })
      }

    )
  }
  selectedDay:any
  selectedDate!:Date
  filterDay(date?:any){
    this.selectedDate= date
      this.selectedDay = this.days.filter(x=> x.name === this.getDayName(date))[0]
  }


  getDayName(selectedDate: Date | null): string {
    if (selectedDate instanceof Date) {
      return this.datePipe.transform(selectedDate, 'EEEE') || '';
    }
    return '';
  }
  getDoctorInfo(id:number){
    this._doctorservice.getDoctorById(id).subscribe(
      (res)=>{
        this.doctor=res
      }
    )
  }
  getPeriodInfoDoctor(docId:number,PeriodId:number){
    let payload={
      docId:docId,
      periodId:PeriodId
    }
    this._doctorservice.getWorkPeriodDoctor(payload).subscribe(
      (res)=>{
        console.log(res)
        this.workPeriod=res[0]
        this.form.patchValue({
          HospitalId:this.workPeriod.hospitalId,
          ClinicId:this.workPeriod.clinicId,
          BookingStatusId:1,
          dayNumber:this.workPeriod.onDay,

      })
      }
    )
  }
  getVisitType(){
    this._lookupservic.getAllVisitTypesNames().subscribe(
      (res)=>{
        this.typeVisit=res
      }
    )
  }
  cancel(){
    this.router.navigate(['/doctors'])
  }
  confirmData(){
      const dialogRef = this.dialog.open(ReservationConfirmComponent,{
        width: "1200px",
        maxHeight:'80%',
        disableClose: true,
        data:this.form.value
      })
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result)
        if(result){
        }
      });
    console.log(this.form.value)
  }
}
