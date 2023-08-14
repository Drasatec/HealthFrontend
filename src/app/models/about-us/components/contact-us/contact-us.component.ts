import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalModel } from 'src/app/models/Models/hospital.model';
import { HospitalNamesModel } from 'src/app/models/Models/names.model';
import { HospitalService } from 'src/app/models/services/hospital.service';
import { LookupService } from 'src/app/models/services/lookup.service';

interface FormValue {
  [key: string]: any; // Or specify the correct types for each property
}

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
  formData(obj:any) {
    console.log(obj)

    let body = new FormData();
    let bodyObj: FormValue = {}
    const formVal = obj;
    Object.keys(formVal).forEach((key) => {
      if (formVal[key]) {
        bodyObj[key] = formVal[key]
        if (key == "patientTranslations") {
          for (let i = 0; i < formVal['patientTranslations'].length; i++) {
            body.append('patientTranslations['+(i)+'][FullName]', formVal.patientTranslations[i].FullName ? formVal.patientTranslations[i].FullName :'');
            body.append('patientTranslations['+(i)+'][Address]', formVal.patientTranslations[i].Address ? formVal.patientTranslations[i].FullName : '');
            body.append('patientTranslations['+(i)+'][LangCode]', formVal.patientTranslations[i].LangCode);
          }
        }
        else {
          body.append(key, formVal[key]);
        }

      }
    });
    return body;
  }
  dataSend:any
  save(){
    this.form.markAllAsTouched()
    if(this.form.valid){
      this.loading=true;
      this.dataSend=this.formData(this.form.value)
      this._hospitalservice.sendHospitalContact(this.dataSend).subscribe(
        (res)=>{
          this.loading=false;

        },(error)=>{
          this.loading=false;

        }
      )
    }
  }
  }

