import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { DoctorInfoModel } from 'src/app/models/Models/doctor.model';
import { DoctorService } from 'src/app/models/services/doctor.service';
import { environment } from 'src/environment/environment.prod';
// import { IDoctor } from 'src/app/Models/names.model';

@Component({
  selector: 'app-special-card-doctor',
  templateUrl: './special-card-doctor.component.html',
  styleUrls: ['./special-card-doctor.component.css']
})
export class SpecialCardDoctorComponent {

  faStar = faStar;
  // faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;
  doctorId:number=0
  doctor!:DoctorInfoModel
  imgUrl=`${environment.imgUrl}`;

    constructor(private activeParam:ActivatedRoute,private doctorservice:DoctorService) {

    }
    ngOnInit() {
      this.getActiveParam()
    }
    getActiveParam() {
      this.activeParam.params.subscribe((res:any) => {
        console.log(res);
        this.doctorId = res.id;
       this.getDoctorById()
      })
    }


    getDoctorById() {
      this.doctorservice.getDoctorById(this.doctorId).subscribe({
        next:next=>{
          this.doctor=next
        }
      }
        
      )
    }

}
