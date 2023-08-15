import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HospitalNamesModel, SpecialNamesModel, DoctorNamesModel } from 'src/app/models/Models/names.model';
import { LookupService } from 'src/app/models/services/lookup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchInput: string = "";
  form!:FormGroup
  hospitalList:HospitalNamesModel[] = [];
  spialtiesList: SpecialNamesModel[] = [];
  doctorsList: DoctorNamesModel[] = [];
  payload={
    lang:'ar'
  }
  @Input() data!:any;
  @Output() FilterChange:EventEmitter<any>=new EventEmitter();
  constructor(private _lookupservice:LookupService,
    private formbuilder:FormBuilder){

  }
  ngOnInit() {
    this.getHospital(this.payload)
    this.getSpeciality(this.payload)
    this.createForm()
    if(this.data){
      this.selectDoctors(+this.data,+this.data)
      this.form.patchValue({
        hosId:+this.data.hosId,
        specialtyId:+this.data.specialtyId,
        docId:+this.data.docId,
      })
    }
    // console.log(this.form.value)
  }

  getHospital(payload:any) {
    this._lookupservice.getAllHospitalsNames(payload).subscribe(
      (res)=>{
        this.hospitalList =res
      }
    )
  }
  getSpeciality(payload:any){
    this._lookupservice.getAllSpecialNames(payload).subscribe(
      (res)=>{
        this.spialtiesList =res
      }
    )
  }
  specialId:any=''
  hosId:any=''

  selectDoctors(special:any,hos:any){
    console.log(special,hos)
    let payload ={
      specialtyId:special ? special.medicalSpecialtyId : this.specialId,
      hosId:hos ? hos.hospitalId : this.hosId
    }
    this._lookupservice.getAllDoctors(payload).subscribe(
      (res)=>{
        this.doctorsList=res
      }
    )
  }
  changeHospital(e:any){
    this.form.patchValue({
      docId:null
    })
    this.doctorsList=[]
    let pay={
      medicalSpecialtyId:this.specialId
    }
    this.hosId = e ? e.hospitalId : ''
    this.selectDoctors(pay,e)

  }
  changeSpcial(e:any){
    let pay={
      hospitalId:this.hosId
    }
    this.selectDoctors(e,pay)
    this.specialId = e ? e.medicalSpecialtyId : '';


  }
  createForm(){
    this.form = new FormGroup({
      hosId: new FormControl(''),
      specialtyId: new FormControl(''),
      docId: new FormControl(''),
    });
  }
  submit(){
    console.log(this.form.value)
    this.FilterChange.emit(this.form.value)
  }
}
