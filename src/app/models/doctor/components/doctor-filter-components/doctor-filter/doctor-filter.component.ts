import { LookupService } from '../../../../services/lookup.service';
import { DatePipe, formatDate } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { WorkPeriodModel, GenderModel, DegreeModel } from 'src/app/models/Models/names.model';


@Component({
  selector: 'app-doctor-filter',
  templateUrl: './doctor-filter.component.html',
  styleUrls: ['./doctor-filter.component.css']
})
export class DoctorFilterComponent implements OnInit{
  constructor(
    private datePipe: DatePipe,
    private lookupService:LookupService,
    ) {
      this.minDate = new Date();
      this.date=new FormControl(new Date())
    }
    date:any;
  selectedDate:any;
  form!:FormGroup
  minDate:Date;
  labelPosition="all"
  labelPosition2="all"
  @Output() GenderChange =new EventEmitter<any>()
  @Output() DateChange=new EventEmitter<any>()
  @Output() filterChange=new EventEmitter<any>()
    @Output() PeriodChange=new EventEmitter<any>()

  ngOnInit(): void {
    this.getGender()
    this.getDegree()
    this.getWorkPeriod()
    // this.filterDay(new Date())
  }
  workPeriods:WorkPeriodModel[]=[]
  getWorkPeriod(){
    this.lookupService.getAllWorkingPeriodNames().subscribe(
      (res)=>{
        this.workPeriods=res
      }
    )
  }
  genderList:GenderModel[]=[]
  getGender(){
    this.lookupService.getAllGender().subscribe(
      (res)=>{
        this.genderList=res
      }
    )
  }
  degreeList:DegreeModel[]=[]
  getDegree(){
    this.lookupService.getAllDegrees().subscribe(
      (res)=>{
        this.degreeList=res
      }
    )
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    console.log(event)
    this.selectedDate = event.value as Date | null;
    // this.selectedDate =this.datePipe.transform(event.value,'yyyy-MM-dd')
    console.log(this.selectedDate)
    this.DateChange.emit(this.selectedDate)
  }
  changeGender(event:any){
    console.log(event.value)
    let filter={
      gender:event.value === "all" ? null :event.value
    }
    this.GenderChange.emit(filter)

  }
  changeDegree(event:any){
    console.log(event.value)
    let filter={
      doctorsDegreeId:event.value === "all" ? null :event.value
    }
    this.filterChange.emit(filter)
  }
  changeWorkPeriod(event:any){
    let filter={
      workingPeriodId: event.value
    }
    this.PeriodChange.emit(filter)
  }
}
