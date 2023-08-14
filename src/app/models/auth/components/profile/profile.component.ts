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

interface FormValue {
  [key: string]: any; // Or specify the correct types for each property
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  religions=[{name:'مسلم',id:1},{name:'مسيحي',id:2},{name:'اخري',id:3}]
  MaritalStatus=[{name:'متزوج',id:1},{name:'اعذب',id:2},{name:'ارمل',id:3},{name:'اخري',id:4}]
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
  }
  genders:GenderModel[]=[]
    getGender(){
    this.lookupservice.getAllGender().subscribe(
      (res:GenderModel[])=>{
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
  readonly DT_FORMAT = "YYYY-MM-DD";

  prepareDataBeforeSend(data:any){

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
    // const dialogRef = this.dialog.open(LoginComponent,{
    //   width: "1200px",
    //   disableClose: true,
    //   data:{
    //     id:id,
    //   }
    // })
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result)
    //   if(result){
    //     this.getTableData(this.fetch)
    //   }
    // });
  }
}


