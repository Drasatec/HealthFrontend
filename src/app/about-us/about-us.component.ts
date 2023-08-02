import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospital.service';
import { HospitalFeatureModel, HospitalModel } from '../Models/hospital.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  hospital:HospitalModel=new HospitalModel
  hospitalId:number=0;
  constructor(
    private _hospitalservice:HospitalService,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (res)=>{
        this.hospitalId=res['id']
        this.getHospitalById(this.hospitalId)
      }
    )
  }
  getHospitalById(id:number){
    this._hospitalservice.getHospitalById(id).subscribe(
      (res)=>{
        this.hospital=res
        this.getFeatures(this.hospital.id)

      }
    )
  }
  hospitalFeature:HospitalFeatureModel[]=[]

  getFeatures(id:number){
    this._hospitalservice.getHospitalFeatures(id).subscribe(
      (res)=>{
        this.hospitalFeature = res.data
      }
    )
  }
}
