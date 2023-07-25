
// import { IDoctor } from '../../../Models/names.model';
import { Component, OnInit } from '@angular/core';
import { DoctorModule } from '../../doctor.module';
import { LookupService } from 'src/app/services/lookup.service';
import { DoctorNamesModel } from 'src/app/Models/names.model';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit{

  doctorList :DoctorNamesModel[]=[]
  payload={
    lang:'ar'
  }
  constructor(private _lookupservice:LookupService) {

  }
  ngOnInit(): void {
    this.getDoctors(this.payload)
  }
  getDoctors(payload:any){
    this._lookupservice.getAllDoctors(payload).subscribe(
      (res)=>{
        this.doctorList=res.slice(0,3)
      }
    )
  }
}
























