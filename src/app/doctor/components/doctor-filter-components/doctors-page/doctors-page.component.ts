import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorModel } from 'src/app/Models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-doctors-page',
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.css'],

})
export class DoctorPageComponent implements OnInit {

  dataSource: MatTableDataSource<DoctorModel> | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator ;
  totalItems!: number ;
  pageSize: number = 10;
  pageIndex: number = 0;
    constructor(
      private route:ActivatedRoute,
      private doctorService:DoctorService,
      private datePipe: DatePipe,

    ) { }
  searchData!:any
  ngOnInit() {
    this.route.params.subscribe(
      (res)=>{
        this.searchData=res
        this.filterDay('',new Date())
        this.filterDoctor()
      }
    )
  }
  doctors:DoctorModel[]=[]
  filterGender:any;
  filterPeriod:any
  days=[{id:1,name:"Saturday"},{id:2,name:"Sunday"},{id:3,name:"Monday"},{id:4,name:"Tuesday"},{id:5,name:"Wednesday"},{id:6,name:"Thursday"},{id:7,name:"Friday"}]

  getFilterGender(event:any){
    this.filterGender =event
    this.filterDoctor()
  }
  getFilterDegree(event:any){
    this.filterDegree =event
    this.filterDoctor()

  }
  getFilterSearch(event:any){
    this.searchData =event
    console.log(this.searchData)
    this.filterDoctor()

  }
  getPeriodChange(event:any){
    this.filterPeriod=event
    this.filterDoctor()
  }
  selectedDay:any
  filterDateParams:any
  selectedDate!:Date
  filterDay(e?:any,date?:any){
    console.log(e,date)
    this.selectedDate=e ? e : date
    if(date){
      this.selectedDay = this.days.filter(x=> x.name === this.getDayName(date))[0]
      this.filterDateParams={
        day:this.selectedDay.id
      }
    }else{
      this.selectedDay = this.days.filter(x=> x.name === this.getDayName(e))[0]
      this.filterDateParams={
        day:this.selectedDay.id
      }
      this.filterDoctor()
      console.log(this.filterDateParams)
    }

    // console.log(this.selectedDay,payload)
  }


  getDayName(selectedDate: Date | null): string {
    if (selectedDate instanceof Date) {
      return this.datePipe.transform(selectedDate, 'EEEE') || '';
    }
    return '';
  }
  filterDegree:any
  loading=false;
  filterDoctor(){
    this.loading=true
    let payload={
      PageNumber: this.pageIndex +1,
      PageSize: this.pageSize,
      ...this.searchData, //search
      ...this.filterGender, //gender
      ...this.filterDateParams, //date
      ...this.filterDegree, //degree
      ...this.filterPeriod
    }
    console.log(payload)
    this.doctorService.getAllDoctor(payload).subscribe(
      (res)=>{
        this.loading=false
        this.doctors=res.data
        console.log(this.doctors)
        this.dataSource = new MatTableDataSource(this.doctors);
        this.dataSource.paginator = this.paginator;
        this.totalItems = res.total;
      },(error)=>{
        this.loading=false
      }
    )
  }
  pageChanged(event: PageEvent) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex+1;
    this.filterDoctor();
  }
}
