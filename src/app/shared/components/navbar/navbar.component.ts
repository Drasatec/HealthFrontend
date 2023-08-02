import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { HospitalNamesModel } from 'src/app/Models/names.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private _lookupservice:LookupService){}
  faBell = faBell;
  hospitals:HospitalNamesModel[]=[]
  ngOnInit(): void {
    this._lookupservice.getAllHospitalsNames().subscribe(
      (res)=>{
        this.hospitals=res.splice(0,6)
      }
    )
  }
}
