import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderModel, NationalityModel } from '../../../Models/names.model';
import * as moment from 'moment';
import { LookupService } from 'src/app/models/services/lookup.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { TranslateService } from '@ngx-translate/core';

interface FormValue {
  [key: string]: any; // Or specify the correct types for each property
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  religions=[]
  MaritalStatus=[]
  userId:string=''
  form=new FormGroup({
    FullName:new FormControl(''),
    FullNameEn:new FormControl('',[Validators.required]),
    LangCode:new FormControl('ar'),
    Address:new FormControl(''),
    Gender:new FormControl<any>(null,[Validators.required]),
    BirthDate:new FormControl('',[Validators.required]),
    MaritalStatus:new FormControl<any>(null,[Validators.required]),
    NationalityId:new FormControl<any>(null,[Validators.required]),
    BloodType:new FormControl(''),
    Religion:new FormControl<any>(null),
    PatientStatus:new FormControl<any>(0),
    userId:new FormControl<any>(this.userId),
  }
  )
  constructor(
    private authService:AuthService,
    private snackBar: MatSnackBar,
    private router:Router,
    private lookupservice:LookupService,
    private route:ActivatedRoute,
    private translateService:TranslateService
    // public dialog: MatDialog,

    ){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next:next=>{
        this.userId = next['userId']
        console.log(this.userId)
        this.form.patchValue({
          userId:this.userId
        })
      }
    })
    this.getGender()
    this.getNationality()
    this.getMarital()
    this.getReligion()
  }
  genders:GenderModel[]=[]
    getGender(){
    this.lookupservice.getAllGender().subscribe(
      (res:GenderModel[])=>{
        this.genders=res
      }
    )
  }
  getMarital(){
    this.lookupservice.getAllMarital().subscribe(
      (res:[])=>{
        this.MaritalStatus=res
      }
    )
  }
  getReligion(){
    this.lookupservice.getAllReligion().subscribe(
      (res:[])=>{
        this.religions=res
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
  readonly DT_FORMAT = "YYYY-MM-DD";

  prepareDataBeforeSend(data:any){

    let paylod={
      ...data,
      BirthDate:data.BirthDate ? moment([
        data.BirthDate.year,
        data.BirthDate.month-1,
        data.BirthDate.day,
      ]).format(this.DT_FORMAT): null,
      PatientTranslations:[{
        FullName:data.FullName ?data.FullName:null,
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
    let bodyObj: FormValue = {}
    const formVal = obj;
    Object.keys(formVal).forEach((key) => {
      if (formVal[key]) {
        bodyObj[key] = formVal[key]
        if (key == "PatientTranslations") {
          for (let i = 0; i < formVal['PatientTranslations'].length; i++) {
            body.append('PatientTranslations['+(i)+'][FullName]', formVal.PatientTranslations[i].FullName ? formVal.PatientTranslations[i].FullName :'');
            body.append('PatientTranslations['+(i)+'][Address]', formVal.PatientTranslations[i].Address ? formVal.PatientTranslations[i].Address : '');
            body.append('PatientTranslations['+(i)+'][LangCode]', formVal.PatientTranslations[i].LangCode);
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
    console.log("save")
    this.form.markAllAsTouched();
    console.log("save2",this.form.value)

    if(this.form.valid){
    console.log("save3")

      this.prepareDataBeforeSend(this.form.value)
      this.authService.addProfile(this.sendData).subscribe({
        next:next=>{
          if(next.success){
            this.snackBar.open("تم الحفظ بنجاح  ", "success", {
              duration: 5000,
              panelClass: 'success'
            });
            this.openLogin()
          }else {
            this.snackBar.open("حاول مرة اخري", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }
          },
            error:error=>{
              this.snackBar.open("حاول مرة اخري ", "error", {
                duration: 5000,
                panelClass: 'error'
              });
            }
        })
    }else {
      this.snackBar.open("حاول مرة اخري ", "error", {
        duration: 5000,
        panelClass: 'error'
      });
    }
  }
  openLogin(){
    this.router.navigate(['/auth/login'])
  }
}


