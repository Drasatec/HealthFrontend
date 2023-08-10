import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalModel } from 'src/app/models/Models/hospital.model';
import { HospitalNamesModel } from 'src/app/models/Models/names.model';
import { HospitalService } from 'src/app/models/services/hospital.service';
import { LookupService } from 'src/app/models/services/lookup.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  @Input() hospital!:HospitalModel
  hospitals:HospitalNamesModel[]=[]
  loading:boolean=false
  form=new FormGroup({
    SenderName:new FormControl(''),
    Email:new FormControl('',[Validators.email,Validators.required]),
    Subject:new FormControl('',[Validators.required]),
    HospitalId:new FormControl<number>(0),
    Message:new FormControl('',[Validators.required]),
  })
  constructor(
    private _lookupservice:LookupService,
    private _hospitalservice:HospitalService
    ){}

  ngOnInit(): void {
    this.getHospitals()
    this.form.value.HospitalId=this.hospital.id
    // this.form.controls.HospitalId.disable()
  }
  getHospitals(){
    this._lookupservice.getAllHospitalsNames().subscribe(
      (res)=>{
        this.hospitals = res
      }
    )
  }
  save(){
    this.form.markAllAsTouched()
    if(this.form.valid){
      this.loading=true;
      this._hospitalservice.sendHospitalContact(this.form.value).subscribe(
        (res)=>{

        },(error)=>{

        }
      )
    }
  }
  }

