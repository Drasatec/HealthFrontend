import { LookupService } from 'src/app/models/services/lookup.service';
import { SpecialNamesModel } from './../../../Models/names.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-specialty',
  templateUrl: './all-specialty.component.html',
  styleUrls: ['./all-specialty.component.css']
})
export class AllSpecialtyComponent implements OnInit{
  // faHeartPulse = faHeartPulse;
  spectialty: SpecialNamesModel[] = [];
  spectialtyThree: SpecialNamesModel[] = [];
  payload={
    lang:'ar'
  }
  constructor(private _lookupservice:LookupService,private router:Router,
    private route:ActivatedRoute) {
  }
  all:boolean=false
  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next:next=>{
        this.all = next['data']
      }
    })
    this.getSpeciality()
  }
  getSpeciality(){
    this._lookupservice.getAllSpecialNames(this.payload).subscribe(
      (res)=>{
        if(!this.all){
          this.spectialty=res.slice(0,4)
        }else{
          this.spectialty=res

        }
      }
    )
  }
  getall(){
    this.router.navigate(['/home/special'], { queryParams: { data: true } })
    
  }
  special(e:any){
    this.router.navigate(['doctor/doctors','',e, ''])

  }
}
