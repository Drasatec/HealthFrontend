import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
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
    private route:Router,
    private translate: TranslateService){}
  faBell = faBell;
  hospitals:HospitalNamesModel[]=[]
  loggedIn:boolean=false
  patientId:any
  defaultLang:any
  ngOnInit(): void {
    this.getLanguages()
    this._lookupservice.getAllHospitalsNames().subscribe(
      (res)=>{
        this.hospitals=res.splice(0,6)
      }
    )
    if(this.authservice.currentUser){
      this.loggedIn =true
    }
    this.patientId=this.authservice.currentPatientId
    this.defaultLang=this.translate.currentLang
  }
  logout(){
    this.authservice.logOut()
    this.loggedIn=false
    this.route.navigate(['/home'])
  }
  login(){
    this.route.navigate(['/auth/login'])
  }
  languages=[]
  getLanguages(){
    this.authservice.getAllLanguages().subscribe(
      {
        next:next=>{
          this.languages=next
        }
      }
    )
  }
  switchLanguage(lang:any) {
    console.log(lang)
    this.translate.use(lang.code);
    window.location.reload();

  }
}
