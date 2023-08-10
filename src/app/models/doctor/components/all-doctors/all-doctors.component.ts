
// import { IDoctor } from '../../../Models/names.model';
import { Component, OnInit } from '@angular/core';
import { DoctorModule } from '../../doctor.module';
import { DoctorNamesModel } from 'src/app/models/Models/names.model';
import { LookupService } from 'src/app/models/services/lookup.service';

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
























