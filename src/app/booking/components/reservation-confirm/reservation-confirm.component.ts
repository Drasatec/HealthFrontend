import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DoctorInfoModel, DoctorWorkPeriodModel } from 'src/app/Models/doctor.model';
import { environment } from 'src/app/environment/environment.prod';
import { BookingService } from 'src/app/services/booking.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.css']
})
export class ReservationConfirmComponent implements OnInit{
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;
  doctor!:DoctorInfoModel;
  imgUrl=`${environment.imgUrl}`;
  workPeriod!:DoctorWorkPeriodModel;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ReservationConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _doctorservice:DoctorService,
    private _bookingservice:BookingService,
    private snackbar:MatSnackBar,


  ){}
  ngOnInit(): void {
    console.log(this.data)
    this.getDoctorInfo(this.data.DoctorId)
    this.getPeriodInfoDoctor(this.data.DoctorId,this.data.WorkingPeriodId)
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
      }
    )
  }
  closeDialog() {
    this.dialogRef.close({isAdd:true});
  }
  // formData(obj:any) {
  //   console.log(obj)

  //   let body = new FormData();
  //   let bodyObj = {}
  //   const formVal = obj;
  //   Object.keys(formVal).forEach((key) => {
  //     if (formVal[key]) {
  //       bodyObj[key] = formVal[key]
  //         body.append(key, formVal[key]);
  //     }
  //   });
  //   return body;
  // }
  confirm(){
    this._bookingservice.addBooking(this.data).subscribe(
      (res)=>{
        this.snackbar.open("تم اضافة الحجز بنجاح ", "ُsuccess", {
          duration: 5000,
          panelClass: 'success'
        });
      },(error)=>{
        this.snackbar.open("حاول مرة اخري  ", "error", {
          duration: 5000,
          panelClass: 'error'
        });
      }
    )
  }
}
