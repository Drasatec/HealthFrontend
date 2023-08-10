import { Component, Input, OnInit } from '@angular/core';
import { HospitalModel, HospitalFeatureModel } from 'src/app/models/Models/hospital.model';
import { HospitalService } from 'src/app/models/services/hospital.service';
import { environment } from 'src/environment/environment.prod';

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
