import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DoctorWorkPeriodModel, DoctorInfoModel } from 'src/app/models/Models/doctor.model';
import { AuthService } from 'src/app/models/auth/services/auth.service';
import { DoctorService } from 'src/app/models/services/doctor.service';
import { environment } from 'src/environment/environment.prod';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit{
  faStar = faStar;
  // faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;
  imgUrl=`${environment.imgUrl}`;
  isDragging!:boolean
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['<', '>'],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  params:any
  constructor(private rouer:ActivatedRoute,private _doctorservice:DoctorService,
    private route:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.rouer.params.subscribe(
      (res)=>{
        this.params = res
        let params={
          hosId:this.params.HospitalId,
          docId:this.params.DoctorId
        }
        this.getAllWorkPeriodDoctor(params)
        this.getDoctorById(this.params.DoctorId)
      }
    )
  }
  workperiodsDoctor:DoctorWorkPeriodModel[]=[]
  getAllWorkPeriodDoctor(params:any){
    this._doctorservice.getWorkPeriodDoctor(params).subscribe(
      (res)=>{
        this.workperiodsDoctor=res
      }
    )
  }
  doctor!:DoctorInfoModel
  getDoctorById(id:number){
    this._doctorservice.getDoctorById(id).subscribe(
      (res)=>{
        this.doctor=res
      }
    )
  }
  activeItemIndex: number = -1;
  selectedWorkPeriod:number=0
  getPeriod(event:any){
    this.selectedWorkPeriod=event
    // this.route.navigate(['/booking/booking-by-patient',this.params.DoctorId,this.selectedWorkPeriod,this.params.date])
    let data={
      DoctorId:this.params.DoctorId,
      WorkingPeriodId:this.selectedWorkPeriod,
      date:this.params.date
    }
    this.navigateToNextPageWithData(data)
  }
  setActiveItem(index: number) {
    this.activeItemIndex = index;
  }
  navigateToNextPageWithData(data: any) {
    if (this.authService.isAuthenticated()) {
      // User is authenticated, navigate directly
      this.route.navigate(['/booking/booking-by-patient'], { queryParams: { data: JSON.stringify(data) } });
    } else {
      // Set redirect URL with data and navigate to login page
      this.authService.setRedirectUrl(`/booking/booking-by-patient?data=${JSON.stringify(data)}`);
      this.route.navigate(['/auth/login']);
    }
  }
}
