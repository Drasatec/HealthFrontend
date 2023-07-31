import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DoctorNamesModel, HospitalNamesModel, SpecialNamesModel } from 'src/app/Models/names.model';
import { LookupService } from 'src/app/services/lookup.service';

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
      this.selectSpecial('',+this.data.specialityId)
      this.form.patchValue({
        hosId:+this.data.hosId,
        specialtyId:+this.data.specialtyId,
        docId:+this.data.docId,
      })
    }
    console.log(this.form.value)
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
  selectSpecial(e:any,specialId:number){
    let payload ={
      ...this.payload,
      specialtyId:e ? e.medicalSpecialtyId : specialId
    }
    this._lookupservice.getAllDoctors(payload).subscribe(
      (res)=>{
        this.doctorsList=res
      }
    )
  }
  createForm(){
    this.form = new FormGroup({
      hosId: new FormControl(''),
      specialtyId: new FormControl(''),
      docId: new FormControl(''),
    });
  }
  submit(){
    this.FilterChange.emit(this.form.value)
  }
}
