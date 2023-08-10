import { LookupService } from 'src/app/models/services/lookup.service';
import { SpecialNamesModel } from './../../../Models/names.model';
import { Component, OnInit } from '@angular/core';


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
  constructor(private _lookupservice:LookupService) {
  }
  ngOnInit(): void {
    this.getSpeciality()
  }
  getSpeciality(){
    this._lookupservice.getAllSpecialNames(this.payload).subscribe(
      (res)=>{
        this.spectialty=res
        this.spectialtyThree=this.spectialty.slice(0,4)
      }
    )
  }
}
