import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionModel } from 'src/app/models/Models/hospital.model';
import { HospitalService } from 'src/app/models/services/hospital.service';
import { environment } from 'src/environment/environment.prod';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit{
  imgList: any[] = [];
  activeSlideIndex = 0;
  imgUrl=`${environment.imgUrl}`;
  promtion:PromotionModel[]=[]
  constructor(private route:Router,private hospitalservice:HospitalService) {
    this.imgList = [
      {id:1,path:"/assets/Images/homeImages/cover1.jpg"},
      {id:1,path:"/assets/Images/homeImages/cover2.jpg"},
      {id:1,path:"/assets/Images/homeImages/cover3.jpg"},
    ]
  }
  ngOnInit(): void {
    this.hospitalservice.getHospitalPromotion().subscribe(
      {next:next=>{
        this.promtion=next.data
      }}
    )
  }
  filterChange(e:any){
    console.log(e)
    this.route.navigate(['doctor/doctors/',e.hosId,e.specialtyId,e.docId?e.docId : ''])
  }
}
