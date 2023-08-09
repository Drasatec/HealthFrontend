import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LookupService } from 'src/app/services/lookup.service';
import { GenderModel, NationalityModel } from 'src/app/Models/names.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  religions=[{name:'مسلم',id:1},{name:'مسيحي',id:2},{name:'اخري',id:3}]
  MaritalStatus=[{name:'متزوج',id:1},{name:'اعذب',id:2},{name:'ارمل',id:3},{name:'اخري',id:4}]
  form=new FormGroup({
    FullName:new FormControl(''),
    FullNameEn:new FormControl('',[Validators.required]),
    LangCode:new FormControl('ar'),
    Address:new FormControl(''),
    Gender:new FormControl('',[Validators.required]),
    BirthDate:new FormControl('',[Validators.required]),
    MaritalStatus:new FormControl('',[Validators.required]),
    NationalityId:new FormControl('',[Validators.required]),
    BloodType:new FormControl(''),
    Religion:new FormControl(''),

  }
  )

  constructor(
    private authService:AuthService,
    private snackBar: MatSnackBar,
    private router:Router,
    private lookupservice:LookupService
    ){}

  ngOnInit(): void {

  }
  genders:GenderModel[]=[]
    getGender(){
    this.lookupservice.getAllGender().subscribe(
      (res)=>{
        this.genders=res
      }
    )
  }
  nationality:NationalityModel[]=[]
    getNationality(){
    this.lookupservice.getAllNationalityNames().subscribe(
      (res)=>{
        this.nationality=res
      }
    )
  }
  sendData:any;
  readonly DT_FORMAT = "DD-MM-YYYY";

  prepareDataBeforeSend(data:any){
    console.log(data)
    let paylod={
      ...data,
      BirthDate:data.BirthDate ? moment([
        data.BirthDate.year,
        data.BirthDate.month-1,
        data.BirthDate.day,
      ]).format(this.DT_FORMAT): null,
      patientTranslations:[{
        FullName:data.FullName ?data.FullName:null,
        Religion:data.Religion ? data.Religion :null,
        Address:data.Address ? data.Address :null,
        LangCode:'ar',
      },{
        FullName:data.FullNameEn ?data.FullNameEn:null,
        LangCode:'en',
      }],
    }
    this.sendData=this.formData(paylod)
  }
  formData(obj:any) {
    console.log(obj)

    let body = new FormData();
    let bodyObj = {}
    const formVal = obj;
    Object.keys(formVal).forEach((key) => {
      if (formVal[key]) {
        bodyObj[key] = formVal[key]
        if (key == "patientTranslations") {
          for (let i = 0; i < formVal['patientTranslations'].length; i++) {
            body.append('patientTranslations['+(i)+'][id]', formVal.patientTranslations[i].id );
            body.append('patientTranslations['+(i)+'][FullName]', formVal.patientTranslations[i].FullName);
            body.append('patientTranslations['+(i)+'][Address]', formVal.patientTranslations[i].Address);
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
  save(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.prepareDataBeforeSend(this.form.value)
      this.authService.addProfile(this.sendData).subscribe(
        (res)=>{
          if(res.success){
              this.snackBar.open("تم الحفظ بنجاح  ", "success", {
                duration: 5000,
                panelClass: 'success'
              });
              this.router.navigate(['/home'])
            }else {
            this.snackBar.open("حاول مرة اخري", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }

        },(error)=>{
          this.snackBar.open("حاول مرة اخري ", "error", {
            duration: 5000,
            panelClass: 'error'
          });
        }
      )
    }
  }
}
function moment(arg0: any[]) {
  throw new Error('Function not implemented.');
}

