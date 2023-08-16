
// import { IDoctor } from '../../../Models/names.model';
import { Component, OnInit } from '@angular/core';
import { DoctorModule } from '../../doctor.module';
import { DoctorNamesModel } from 'src/app/models/Models/names.model';
import { LookupService } from 'src/app/models/services/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss']
})
export class AllDoctorsComponent implements OnInit{
  doctorList :DoctorNamesModel[]=[]
  payload={
    lang:'ar'
  }
  all:boolean=false
  constructor(private _lookupservice:LookupService,private router:Router,
    private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next:next=>{
        this.all = next['data']
      }
    })
    this.getDoctors(this.payload)
  }
  getDoctors(payload:any){
    this._lookupservice.getAllDoctors(payload).subscribe(
      (res)=>{
        console.log(this.all,res)
        if(!this.all){
          this.doctorList=res.slice(0,3)
        }else{
          this.doctorList=res

        }
      }
    )
  }
  seeAll(){
    this.router.navigate(['/doctor/doctors'], { queryParams: { data: true } })
  }
}
























