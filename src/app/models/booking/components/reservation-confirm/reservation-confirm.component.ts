import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { DoctorInfoModel, DoctorWorkPeriodModel } from 'src/app/models/Models/doctor.model';
import { BookingService } from 'src/app/models/services/booking.service';
import { DoctorService } from 'src/app/models/services/doctor.service';
import { environment } from 'src/environment/environment.prod';

interface FormValue {
  [key: string]: any; // Or specify the correct types for each property
}
@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.css']
})
export class ReservationConfirmComponent implements OnInit{
  // faLocationDot = faLocationDot;
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
    private datePipe: DatePipe,
    private route:Router

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
  formData(obj:any) {
    console.log(obj)

    let body = new FormData();
    let bodyObj: FormValue = {}
    const formVal = obj;
    Object.keys(formVal).forEach((key) => {
      if (formVal[key]) {
        bodyObj[key] = formVal[key]
        if (key == "patientTranslations") {
          for (let i = 0; i < formVal['patientTranslations'].length; i++) {
            body.append('patientTranslations['+(i)+'][FullName]', formVal.patientTranslations[i].FullName ? formVal.patientTranslations[i].FullName :'');
            body.append('patientTranslations['+(i)+'][Address]', formVal.patientTranslations[i].Address ? formVal.patientTranslations[i].FullName : '');
            body.append('patientTranslations['+(i)+'][LangCode]', formVal.patientTranslations[i].LangCode);
          }
        }
        else {
          body.append(key, formVal[key]);
        }

      }
    });
    return body;
  }
  sendData:any
  confirm(){
    console.log(this.data)

    this.sendData=this.formData(this.data)
    this._bookingservice.addBooking(this.data.ClinicId,this.sendData).subscribe(
      (res)=>{
        this.snackbar.open("تم اضافة الحجز بنجاح ", "ُsuccess", {
          duration: 5000,
          panelClass: 'success'
        });
        this.closeDialog()
        this.route.navigate(['/booking/booking-pages'])
      },(error)=>{
        this.snackbar.open("حاول مرة اخري  ", "error", {
          duration: 5000,
          panelClass: 'error'
        });
      }
    )
  }
}
