import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HospitalNamesModel } from 'src/app/models/Models/names.model';
import { AuthService } from 'src/app/models/auth/services/auth.service';
import { LookupService } from 'src/app/models/services/lookup.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(
    private _lookupservice:LookupService,
    private authservice:AuthService,
    private route:Router){}
  faBell = faBell;
  hospitals:HospitalNamesModel[]=[]
  loggedIn:boolean=false
  ngOnInit(): void {
    this._lookupservice.getAllHospitalsNames().subscribe(
      (res)=>{
        this.hospitals=res.splice(0,6)
      }
    )
    if(this.authservice.currentUser){
      this.loggedIn =true
    }
  }
  logout(){
    this.authservice.logOut()
    this.loggedIn=false
    this.route.navigate(['/home'])
  }
  login(){
    this.route.navigate(['/auth/login'])
  }
}
