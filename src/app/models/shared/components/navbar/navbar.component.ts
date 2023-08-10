import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HospitalNamesModel } from 'src/app/models/Models/names.model';
import { LookupService } from 'src/app/models/services/lookup.service';


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
