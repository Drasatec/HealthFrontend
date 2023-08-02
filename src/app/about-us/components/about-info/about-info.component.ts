import { Component, Input, OnInit } from '@angular/core';
import { HospitalFeatureModel, HospitalModel } from 'src/app/Models/hospital.model';
import { environment } from 'src/app/environment/environment.prod';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit{
  @Input() hospital!:HospitalModel
  @Input() hospitalFeature:HospitalFeatureModel[]=[]
  imgUrl=`${environment.imgUrl}`;
  constructor(private _hosptalservice:HospitalService){}
  ngOnInit(): void {
  }



}
